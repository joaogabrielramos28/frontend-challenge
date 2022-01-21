import styled from 'styled-components'


export const Container = styled.section`
    width: 100%;
    background-color:var(--green-500);
    display: flex;
    justify-content: center;
    align-items: center;
    height:250px;

    form{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button{
        width:200px;
        background-color: var(--green-700);
        color: var(--white);
        border-radius:7px;
        border:none;
        padding:14px 16px;
        margin-top:26px;
        margin-left:20px;
        cursor:pointer;

        &:hover{
            opacity:.7;
            transition:opacity 0.7s;
        }
    }

`

export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`


export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;



    label{
        font-size:1rem;
        color:var(--white);
        margin:0 20px;
        margin-bottom:7px;
    }


    select{
        width:250px;
        padding:12px 22px;
        outline:none;
        border-radius:7px;
    }

    input{
        width:300px;
        padding:12px 22px;
        border-radius:7px;
        outline:none;
        border:none;

        &:focus{
            border:2px solid var(--green-700);
        }
    }

    #meta{
        width:150px;
    }

    select,input{
        margin: 0 20px;
    }

`