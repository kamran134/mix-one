import React from "react";
import './header.css';
import Logo from '../assets/Logo.png';
import MixOneButton from "../ui/Button";

const MixOneHeader = () => {
    return (
        <div className="main-container-inner">
            <header className="m-header">
                <div className="m-header__logo">
                    <img src={Logo} />
                </div>
                <div className="m-header__buttons">
                    <MixOneButton onClick={() => {}} text={"Скачать"} type={"button"} />
                    <MixOneButton onClick={() => {}} text={"Язык"} type={"dropdown"} />
                </div>
            </header>
        </div>
    );
}

export default MixOneHeader;