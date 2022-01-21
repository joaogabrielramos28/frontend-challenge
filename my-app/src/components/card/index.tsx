import React from "react";
import { Container } from "./styles";
import { MdModeEdit, MdClose } from "react-icons/md";
import Flag from "../../assets/flag.png";
const Card: React.FC = () => {
  return (
    <Container>
      <div className="actions">
        <MdModeEdit size={24} color={"#868686"} />
        <MdClose size={24} color={"#868686"} />
      </div>

      <div className="country-info">
        <img src={Flag} alt="Bandeira" />
        <h3>Brasil</h3>
      </div>

      <hr />

      <div className="meta-info">
        <p>Local: Balneario Camboriu</p>
        <p>Meta: 04/2022</p>
      </div>
    </Container>
  );
};

export default Card;
