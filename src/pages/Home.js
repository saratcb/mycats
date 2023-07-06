import React from 'react';
import { StyledDiv, CatImage, ImageDiv} from '../style';
import { StyledH1 } from '../components/Typography/style';


const Home = ()=>{
    return (
        <StyledDiv>
        <StyledH1> Cats Festival </StyledH1>
        <ImageDiv>
        <CatImage src="./babycat.jpg" alt="baby white cat"/>
        </ImageDiv>
        </StyledDiv>
    )
}

export default Home;