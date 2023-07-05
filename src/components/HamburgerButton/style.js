import styled from 'styled-components';

export const StyledButton = styled.button`
    border:none;
    padding:0;
    padding-right: 10px;
    cursor: pointer;
    display:none;
    position:relative;
    margin-top: -45px;
    margin-bottom: 13px;
    @media screen and (max-width: 670px){
        display:block;
        float:right;
        background-image: url('./hamburger-md.svg');
        background-repeat: no-repeat;
        background-size: contain;
        width: 24px;
        height: 24px;
    }

`