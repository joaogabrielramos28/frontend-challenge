import React, { FormEvent, useEffect, useRef, useState } from "react";
import {apiRestCountries, apiLocal} from "../../services/api";
import { Container, InputContainer } from "./styles";
import InputMask, {ReactInputMask} from 'react-input-mask'
import { useFetch } from "../../hooks/useFetch";
import { CardProps } from "../../types/card";
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

  const {mutate,data} = useFetch('cards')


  useEffect(() => {
    apiRestCountries.get("all").then((response) => {
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
      return null;
    })
    const flag = country[0].flag
   


    await apiLocal.post<CardProps>('cards',{
      country:countrySelected,
      flag,
      local,
      goal
    }).then((response)=>{
      const newCard={
        id:response.data.id,
        country:countrySelected,
        local,
        goal:goal,
        flag:flag
      }

     const newList:CardProps[] = [];

     data?.map((card)=>{
      return newList.push(card)
      
     })

     newList.push(newCard)
     
     

     mutate(newList,false)
      
    })

   



   
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
          
          <input
            ref={inputGoalRef}
            type="text"
            id="goal"
            placeholder="mês/ano"
           
            required
            
          />
           
        </InputContainer>

        <button>Adicionar</button>
      </form>
    </Container>
  );
};

export default SearchSection;
