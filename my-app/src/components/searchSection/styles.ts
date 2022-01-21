import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-color: var(--green-500);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  form {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:20px 0;

    
  }

  button {
    width: 200px;
    background-color: var(--green-700);
    color: var(--white);
    border-radius: 7px;
    border: none;
    padding: 14px 16px;
    margin-top: 26px;
    margin-left: 20px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
      transition: opacity 0.7s;
    }
  }

  @media (max-width: 1000px) {
      form{
        flex-direction: column;
      }
      button{
          width:300px;
          margin-left:0;
      }
    }

    @media(max-width: 320px) {

        button{
            width:250px;
            margin-left:0;
        }
    }

  
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;



  label {
    font-size: 1rem;
    color: var(--white);
    margin: 0 20px;
    margin-bottom: 7px;
  }

  select {
    width: 250px;
    padding: 12px 22px;
    outline: none;
    border-radius: 7px;
  }

  input {
    width: 300px;
    padding: 12px 22px;
    border-radius: 7px;
    outline: none;
    border: none;


    &:focus {
      border: 2px solid var(--green-700);
    }
  }

  #meta {
    width: 150px;
  }

  select,
  input {
    margin: 0 20px;
  }


  @media (max-width: 1000px) {
    select {
      width: 350px;
    }

    input,
    #meta {
        width:300px;
    }

    select,input{
        margin: 10px 0;
    }

  
  }

  @media (max-width:320px){
    select {
      width: 300px;
    }

    input,
    #meta {
        width:250px;
    }
  }
`;
