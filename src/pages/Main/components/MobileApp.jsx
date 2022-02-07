import React from "react";
import { ReactComponent as Pixel } from '../../../assets/Pixel.svg';
import { ReactComponent as IPhone } from '../../../assets/iPhone.svg';

const MobileApp = () => {
    return (
        <div className="mobile-app">
            <Pixel />
            <IPhone />
            <div className="mobile-app__container">
                <h2 className="white-text">
                    Начните экономить уже сегодня
                </h2>
            </div>
        </div>
    );
}

export default MobileApp;