import "./header.scss";
import logo from "../../assets/svg/logo.svg";
import useWindowSize from "../../hooks/useWindowSize";
import menu from "../../assets/svg/menu.svg";
import Burger from "../Burger/Burger";
import close from "../../assets/svg/close.svg";

import { useState } from "react";

const Header = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
    const size = useWindowSize();

    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="Logo" />
                <span className="header__logo__text">Company</span>
            </div>
            {size.width! > 670 ? (
                <nav className="header__nav">
                    <span>Products</span>
                    <span>Features</span>
                    <span>Updates</span>
                    <span>Account</span>
                </nav>
            ) : (
                <img
                    className="header__burger"
                    src={isBurgerOpen ? close : menu}
                    alt="Burger"
                    onClick={() => {
                        setIsBurgerOpen((open) => !open);
                    }}
                />
            )}
            {isBurgerOpen && <Burger />}
        </header>
    );
};

export default Header;
