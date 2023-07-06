import React from "react";
import { StyledButton, StyledImg } from "./style";

const VoteButton = ({onClick, image, alt})=>{
    return (
        <StyledButton onClick={onClick}>
            <StyledImg src={image} alt={alt} />
        </StyledButton>
      );

};
    

export default VoteButton;
