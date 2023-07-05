import { HamburgerButton } from "../HamburgerButton"
import { StyledLink, StyledNavbar} from "./style"
import { useState } from "react";

export const Navbar = ()=>{
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    return(
        <StyledNavbar>
            <HamburgerButton onClick = {toggleMenu} />
            <StyledLink to = "">Home</StyledLink>
            <StyledLink className={'active'} to="/vote">Vote</StyledLink>
            <StyledLink to="/breeds">Breeds</StyledLink>
            <StyledLink to="/images">Images</StyledLink>
            <StyledLink to="/favorites">Favorites</StyledLink>
            <StyledLink to="/upload">Upload</StyledLink>
        </StyledNavbar>
    )
}