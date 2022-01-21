import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  .actions {
    margin-top: 5px;
    width: 100%;
    display: flex;
    justify-content: end;

    svg {
      cursor: pointer;
      margin: 5px 10px;

      &:hover {
        opacity: 0.7;
        transition: 0.7s ease;
      }
    }
  }

  .country-info {
    display: flex;
    flex-direction: column;
    padding: 5px 10px;

    img {
      width: 60px;
      object-fit: cover;
    }

    h3 {
      color: var(--green-500);
      font-size: 1rem;
      line-height: 19px;
      text-transform: uppercase;
      margin-top: 15px;
    }
  }

  hr {
    margin: 5px 10px 0 10px;
  }

  .meta-info {
    flex-direction: column;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex=start;
    justify-content: center;
    padding: 0 30px;

    p {
      text-align: left;
      font-size: 1rem;
      line-height: 19px;
    }

    input {
      max-width: 150px;
      padding: 6px 22px;
      outline: none;
      border:none;
      border-bottom:1px solid var(--black-700);
      
    }

    input+input{
        margin-top:10px;
    }
  }
`;
