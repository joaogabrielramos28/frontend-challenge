import React, { useEffect, useState } from "react";
import { apiLocal } from "../../services/api";
import Card from "../card/index";
import {Container} from './styles'

interface CardApiResponse{
  id:number;
  country:string;
  flag:string;
  local:string;
  goal:string;
}
const CardsContainer: React.FC = () => {
  const [cards,setCards] = useState<CardApiResponse[]>([])
  useEffect(()=>{
    apiLocal.get('cards').then((response)=>{
      setCards(response.data)
    })
  },[])
  return (
    <Container>
      {cards.map((card)=>(
        <Card key={card.id} countryName={card.country} local={card.local} goal={card.goal} flag={card.flag} id={card.id} />
      ))}
    </Container>
  );
};

export default CardsContainer;
