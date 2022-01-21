import React from "react";
import { Container, InputContainer } from "./styles";

const SearchSection: React.FC = () => {
  return (
    <Container>
      <form action="">
        <InputContainer>
          <label htmlFor="">País</label>
          <select name="" id="">
            <option value="">Selecione ...</option>
          </select>
        </InputContainer>
        <InputContainer>
          <label htmlFor="">Local</label>
          <input type="text" placeholder="Digite o local que deseja conhecer" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="">Meta</label>
          <input type="text" id="meta" placeholder="mês/ano" />
        </InputContainer>
        
        <button>Adicionar</button>
      </form>
    </Container>
  );
};

export default SearchSection;
