import styled from 'styled-components'

export const Container = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    .actions{
        margin-top:5px; 
        width: 100%;
        display: flex;
        justify-content: end;

        svg{
            margin:5px 10px;
        }
    }

    .country-info{
        display: flex;
        flex-direction: column;
        padding:5px 10px;

        img{
            width:60px;
            object-fit: cover;
        }

        h3{
            color: var(--green-500);
            font-size:1rem;
            line-height: 19px;
            text-transform: uppercase;
            margin-top:15px;
        }

    }

    hr{
        margin:5px 10px 0 10px;
    }

    .meta-info{
        flex-direction: column;
        width:100%;
        height:100%;
        display:flex;
        align-items: flex=start;
        justify-content: center;
        padding:0 30px;


        p{
            text-align:left;
            font-size: 1rem;
            line-height: 19px;
            
        }
    }

`