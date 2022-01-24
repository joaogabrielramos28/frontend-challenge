import styled from 'styled-components'


export const Container = styled.section`
    overflow-x: hidden;
    display: grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,auto));
    padding:20px 40px;
    margin-top:40px;
    gap:30px;
    justify-content:center;

    

`


export const Loading = styled.div`

    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:50px 0;


    img{
        width:80px;
    }

`