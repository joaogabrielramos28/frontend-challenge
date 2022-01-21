import React, { FormEvent, useEffect, useRef, useState } from "react";
import api from "../../services/api";
import { Container, InputContainer } from "./styles";
import InputMask, {ReactInputMask} from 'react-input-mask'
interface ApiResponse {
  numericCode: string;
  flag: string;
  translations: {
    br: string;
  };
}
const SearchSection: React.FC = () => {
  const [countries, setCountries] = useState<ApiResponse[]>([]);
  const inputGoalRef = useRef<HTMLInputElement>(null);
  const inputLocalRef = useRef<HTMLInputElement>(null);
  const inputCountryRef = useRef<HTMLSelectElement>(null);
  useEffect(() => {
    api.get("all").then((response) => {
      setCountries(response.data);
    });
  }, []);





  async function handleAddGoal(event: FormEvent) {
    event.preventDefault();

    const countrySelected = inputCountryRef.current?.value;
    const local = inputLocalRef.current?.value;
    const goal = inputGoalRef.current?.value;
    

    const country  = countries.filter((country) => {
      if(country.translations.br === countrySelected){
        return {
          flag:country.flag
        }
      }
      return '';
    })
    const flag = country[0].flag
   
    const data = {
      countrySelected,
      local,
      goal,
      flag
    };

   console.log(data)
  }

  
  return (
    <Container>
      <form onSubmit={handleAddGoal}>
        <InputContainer>
          <label htmlFor="country">País</label>
          <select ref={inputCountryRef} id="country" required>
            <option value="">Selecione ...</option>
            {countries.map((country) => (
              <option value={country.translations.br} key={country.numericCode}>
                {country.translations.br}
              </option>
            ))}
          </select>
        </InputContainer>
        <InputContainer>
          <label htmlFor="local">Local</label>
          <input
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
            inputRef={inputGoalRef}
            type="text"
            id="goal"
            placeholder="mês/ano"
            mask={'99/9999'}
            required
            
          />
           
        </InputContainer>

        <button>Adicionar</button>
      </form>
    </Container>
  );
};

export default SearchSection;
