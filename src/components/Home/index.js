import React from 'react';
import { StyledDiv, StyledImg } from './style';
import { StyledH1 } from '../Typography/style';

export const Home = ()=>{
    return (
        <StyledDiv>
        <StyledH1> Cats Festival </StyledH1>
        <StyledImg src="./babycat.jpg" alt="baby white cat"/>
        </StyledDiv>
    )
}