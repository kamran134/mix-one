import React from "react";
import Screens from '../../../assets/Screens.png';

const Coupones = () => {
    return (
        <div className="subview">
            <div className="subview__left">
                <img src={Screens} />
            </div>
            <div className="flex-right">
                <h1>Купоны</h1>
                <p>Используя наше приложение вы получаете доступ у купонам различных элитных заведений.</p>
            </div>
        </div>
    );
}

export default Coupones;