import { Link } from "react-router-dom";
import styled from 'styled-components';

export const StyledLink = styled(Link)`
    float: left;
    text-align: center;
    border-right: 1px solid gray;
    display: block;
    color:black;
    padding: 14px 16px;
    text-decoration: none;
    font-weight:bold;

    &:last-child{
  border-right:none;
    }

    &.active {
      background-color: pink;
    }

    &:hover{
        background-color: rgb(79, 79, 79);
        color:whitesmoke;
    }

    @media screen and (max-width: 670px) {
    display: none;
  }



`
export const StyledNavbar = styled.nav`
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: rgb(56, 163, 165);
    position:fixed;
    top:0;
    width:100%;
`