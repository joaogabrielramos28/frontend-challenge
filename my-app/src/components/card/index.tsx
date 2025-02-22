import React, { useState,useRef } from "react";
import { Container } from "./styles";
import { MdModeEdit, MdClose, MdSave } from "react-icons/md";
import { apiLocal } from "../../services/api";
import { CardProps } from "../../types/card";
import { useFetch } from "../../hooks/useFetch";
import ToastFunction from "../../utils/toast";
import InputMask from 'react-input-mask'


const Card: React.FC<CardProps> = ({ country, local, goal, flag, id }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const {data,mutate} = useFetch('cards')
  const [goalInput,setGoalInput] = useState<string>(goal || '')
  const inputEditLocalRef = useRef<HTMLInputElement>(null);
  const handleRemoveCard = (id: number): void => {
    try{
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
    }catch{
      ToastFunction('Erro ao deletar meta!','error')
    }
  };
  const handleEditModeOn = () => {
    setIsEditing(true);
  };

  const handleEditModeoff = () => {
    setIsEditing(false);
  };

  const handleUpdateCard = (id: number): void => {
    const local = inputEditLocalRef.current?.value
    const goal = goalInput
    try{
      apiLocal
      .put(`cards/${id}`, {
        flag,
        country,
        local,
        goal,
      })
      .then(() => {
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
    }catch{
      ToastFunction('Erro ao editar meta!','error')
    }
  };
  

  return (
    <Container>
      <div className="actions">
        {isEditing ? (
          <>
          <MdSave size={24} color={"#868686"} onClick={()=>(handleUpdateCard(id))} data-testid="saveButton" />
          <MdClose size={24} color={"#868686"} onClick={handleEditModeoff} />
          
          </>
        ) : (
          <>
            <MdModeEdit
              size={24}
              color={"#868686"}
              onClick={handleEditModeOn}
              data-testid="editButton"
            />
            <MdClose
              size={24}
              color={"#868686"}
              onClick={() => handleRemoveCard(id)}
              data-testid="deleteButton"
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
            <input data-testid="input-edit" type="text" defaultValue={local} ref={inputEditLocalRef} />
            <InputMask
            onChange={(e)=>setGoalInput(e.target.value)}
            type="text"
            id="goal"
            placeholder="mês/ano"
            mask="99/9999"
            defaultValue={goal}
            required
            data-testid="input-edit"
            
            
          />
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
