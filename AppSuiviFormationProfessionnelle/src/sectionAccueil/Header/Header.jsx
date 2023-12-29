import "./Header.css";

import {NavHeader, NavLogo, NavNav, NavULright, NavULcenter, NavLItemscenter, NavLItemsright} from "../index";

function Header() {
    return (
        <NavHeader>
            <NavLogo>Formation</NavLogo>
            <NavNav>
                <NavULcenter>
                    <NavLItemscenter>
                        <a href="#">Accueil</a>
                    </NavLItemscenter>
                    <NavLItemscenter>
                        <a href="#">Detail</a>
                    </NavLItemscenter>
                    <NavLItemscenter>
                        <a href="#">Formation</a>
                    </NavLItemscenter>
                    <NavLItemscenter>
                        <a href="#">Aider</a>
                    </NavLItemscenter>
                </NavULcenter>
            </NavNav>
            <NavULright>
                <NavLItemsright>
                    <a href="#">S'inscrire</a>
                </NavLItemsright>
                <NavLItemsright>
                    <a href="#">Se connecter</a>
                </NavLItemsright>
            </NavULright>
        </NavHeader>
    )
}

export default Header;