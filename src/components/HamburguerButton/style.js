import styled from 'styled-components';

export const StyledButton = styled.button`
    border:none;
    padding:0;
    padding-right: 10px;
    background-color: transparent;
    cursor: pointer;
    display:none;
    position:relative;
    margin-top: -45px;
    margin-bottom: 13px;
    @media screen and (max-width: 670px){
        display:block;
        float:right;
    }
`