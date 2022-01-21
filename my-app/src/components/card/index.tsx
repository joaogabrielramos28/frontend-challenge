import React, { useState,useRef } from "react";
import { Container } from "./styles";
import { MdModeEdit, MdClose, MdSave } from "react-icons/md";
import { apiLocal } from "../../services/api";

interface CardProps {
  countryName: string;
  local: string;
  goal: string;
  flag: string;
  id: number;
}

const Card: React.FC<CardProps> = ({ countryName, local, goal, flag, id }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const inputEditLocalRef = useRef<HTMLInputElement>(null);
  const inputEditGoalRef = useRef<HTMLInputElement>(null)
  const handleRemoveCard = (id: number): void => {
    apiLocal.delete(`cards/${id}`).then((response) => {
      console.log(response.data);
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
        country: countryName,
        local,
        goal,
      })
      .then((response) => {
        console.log(response.data);
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
        <img src={flag} alt={`Bandeira ${countryName} `} />
        <h3>{countryName}</h3>
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
