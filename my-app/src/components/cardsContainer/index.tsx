import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Card from "../card/index";
import {Container, Loading} from './styles'
import Spinner from '../../assets/loading.gif'

const CardsContainer: React.FC = () => {
  const [loading,setLoading] = useState<boolean>(true);
  const {data} = useFetch('cards')

 
  useEffect(()=>{
    data ? setLoading(false) :setLoading(true)
  },[data])

  if(loading){
    return(
      <Loading data-testid="loading">
        <img src={Spinner} alt="spinner" />
      </Loading>
    )
  }
  return (
    <Container data-testid="resolved">
      
      {data?.map((card)=>(
        <Card data-testid="card"  key={card.id} country={card.country} local={card.local} goal={card.goal} flag={card.flag} id={card.id} />
      ))}
    </Container>
  );
};

export default CardsContainer;
