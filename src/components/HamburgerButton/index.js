import React from "react";
import { StyledButton } from "./style";


export const HamburgerButton = ({onClick})=>(
    <StyledButton onClick={onClick}>
       <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 96 960 960"
        width="48"
        fill="white">
        <path d="M120 
        816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
      </svg> 
    </StyledButton>
);