import { styled } from "styled-components";


export const StyledDiv = styled.div `
display: flex;
align-items: center;
flex-direction: column;
`
export const GridImages = styled.div `
    padding-top: 50px;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 30px;
`

export const CatImage = styled.img`
    height: 300px;
    width: 300px;
    align-items: center;
    border-radius: 10%;
    
`

export const StyledButton = styled.button`
    position: relative;
    background-color: rgb(56, 163, 165);
    border-radius: 20%;
    width:40%;

`
export const ImageDiv = styled.div `
    display:flex;
    flex-direction:column;
    border-radius: 10%;
    border:5px solid rgb(233, 204, 209);
    gap:10px;
    align-items: center;
`
export const ButtonsDiv = styled.div `
    display: flex;
    gap:30px;
`
