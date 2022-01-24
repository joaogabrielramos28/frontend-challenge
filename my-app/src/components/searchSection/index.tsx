import React, { FormEvent, useEffect, useRef, useState } from "react";
import { apiRestCountries, apiLocal } from "../../services/api";
import { Container, InputContainer } from "./styles";
import InputMask from "react-input-mask";
import { useFetch } from "../../hooks/useFetch";
import { CardProps } from "../../types/card";
import ToastFunction from "../../utils/toast";
interface ApiResponse {
  numericCode: string;
  flag: string;
  translations: {
    br: string;
  };
}

const SearchSection: React.FC = () => {
  const [countries, setCountries] = useState<ApiResponse[]>([]);
  const inputLocalRef = useRef<HTMLInputElement>(null);
  const inputCountryRef = useRef<HTMLSelectElement>(null);
  const [goalInput, setGoalInput] = useState<string>("");
  const { mutate, data } = useFetch("cards");

  useEffect(() => {
    apiRestCountries.get("all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  async function handleAddGoal(event: FormEvent) {
    event.preventDefault();

    const countrySelected = inputCountryRef.current?.value;
    const local = inputLocalRef.current?.value;
    const goal = goalInput;
    
    try{
      const country = countries.filter((country) => {
        if (country.translations.br === countrySelected) {
          return {
            flag: country.flag,
          };
        }
        return null;
      });
      const flag = country[0].flag;
  
      await apiLocal
        .post<CardProps>("cards", {
          country: countrySelected,
          flag,
          local,
          goal,
        })
        .then((response) => {
          const newCard = {
            id: response.data.id,
            country: countrySelected,
            local,
            goal: goal,
            flag: flag,
          };
  
          const newList: CardProps[] = [];
  
          data?.map((card) => {
            return newList.push(card);
          });
  
          newList.push(newCard);
  
          mutate(newList, false);
  
          ToastFunction("Meta adicionada com sucesso!!");
        });
    }catch {
      ToastFunction("Erro ao adicionar meta!",'error')
    }
    
  }

  return (
    <Container>
      <form onSubmit={handleAddGoal} data-testid="form-add-goal">
        <InputContainer>
          <label htmlFor="country">País</label>
          <select ref={inputCountryRef} id="country" required data-testid="country">
            <option data-testid="default" value="">Selecione ...</option>
            {countries.map((country) => (
              <option data-testid={country.translations.br} value={country.translations.br} key={country.numericCode}>
                {country.translations.br}
              </option>
            ))}
          </select>
        </InputContainer>
        <InputContainer>
          <label htmlFor="local">Local</label>
          <input
            data-testid="local"
            ref={inputLocalRef}
            type="text"
            id="local"
            placeholder="Digite o local que deseja conhecer"
            required

          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="goal">Meta</label>

          <InputMask
            data-testid="goal"
            onChange={(e) => setGoalInput(e.target.value)}
            type="text"
            id="goal"
            placeholder="mês/ano"
            mask="99/9999"
            required
           
          />
        </InputContainer>

        <button>Adicionar</button>
      </form>
    </Container>
  );
};

export default SearchSection;
