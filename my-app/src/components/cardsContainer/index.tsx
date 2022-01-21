import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Card from "../card/index";
import {Container} from './styles'


const CardsContainer: React.FC = () => {
  const {data} = useFetch('cards')
  return (
    <Container>
      {data?.map((card)=>(
        <Card key={card.id} country={card.country} local={card.local} goal={card.goal} flag={card.flag} id={card.id} />
      ))}
    </Container>
  );
};

export default CardsContainer;
