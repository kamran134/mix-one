import React from "react";
import { ReactComponent as DropDown } from '../assets/dropdown.svg';
import './ui.css';

const MixOneButton = props => {
    return (
        <>
            {props.type === "button" ? <button className="mix-button m-button dark-text" onClick={props.onClick}>
                {props.text}
            </button> : 
            props.type === "dropdown" ? <button className="mix-button m-dropdown dark-text">
                {props.text} <DropDown />
            </button> :
            <div>
            </div>}
        </>
    );
}

export default MixOneButton;