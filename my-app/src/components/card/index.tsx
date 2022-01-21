import React, { useState,useRef } from "react";
import { Container } from "./styles";
import { MdModeEdit, MdClose, MdSave } from "react-icons/md";
import { apiLocal } from "../../services/api";
import { CardProps } from "../../types/card";
import { useFetch } from "../../hooks/useFetch";
import ToastFunction from "../../utils/toast";



const Card: React.FC<CardProps> = ({ country, local, goal, flag, id }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const {data,mutate} = useFetch('cards')
  const inputEditLocalRef = useRef<HTMLInputElement>(null);
  const inputEditGoalRef = useRef<HTMLInputElement>(null)
  const handleRemoveCard = (id: number): void => {
    apiLocal.delete(`cards/${id}`).then((response) => {
      
      const newList = data?.filter((card)=>{
        if(card.id !== id){
          return card
        }
        return null;
      })
      ToastFunction("Meta removida com sucesso!!")
      mutate(newList,false)
    });
  };
  const handleEditModeOn = () => {
    setIsEditing(true);
  };

  const handleEditModeoff = () => {
    setIsEditing(false);
  };

  const handleUpdateCard = (id: number): void => {
    const local = inputEditLocalRef.current?.value
    const goal = inputEditGoalRef.current?.value
    apiLocal
      .put(`cards/${id}`, {
        flag,
        country,
        local,
        goal,
      })
      .then((response) => {
        const newList = data?.map((card)=>{
          if(card.id === id){
            return {...card,goal:goal,local:local}
          }
          return card;
        })
        mutate(newList,false)
        ToastFunction("Meta editada com sucesso!!")
      });

      setIsEditing(false);
  };

  return (
    <Container>
      <div className="actions">
        {isEditing ? (
          <>
          <MdSave size={24} color={"#868686"} onClick={()=>(handleUpdateCard(id))} />
          <MdClose size={24} color={"#868686"} onClick={handleEditModeoff} />
          
          </>
        ) : (
          <>
            <MdModeEdit
              size={24}
              color={"#868686"}
              onClick={handleEditModeOn}
            />
            <MdClose
              size={24}
              color={"#868686"}
              onClick={() => handleRemoveCard(id)}
            />
          </>
        )}
      </div>

      <div className="country-info">
        <img src={flag} alt={`Bandeira ${country} `} />
        <h3>{country}</h3>
      </div>

      <hr />

      <div className="meta-info">
        {isEditing ? (
          <>
            <input type="text" defaultValue={local} ref={inputEditLocalRef} />
            <input type="text" defaultValue={goal} ref={inputEditGoalRef} />
          </>
        ) : (
          <>
            <p>Local: {local}</p>
            <p>Meta: {goal}</p>
          </>
        )}
      </div>
    </Container>
  );
};

export default Card;
