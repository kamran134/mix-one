import React from "react";
import SubscribePhoto from '../../../assets/subscribe.png';

const Subscribe = () => {
    return (
        <div className="subview">
            <div className="subview__left">
                <img src={SubscribePhoto} />
            </div>
            <div className="flex-right">
                <h1>Подписка</h1>
                <p>Абсолютно все купоны будут доступны вам всего за 1 AZN / месяц.</p>
            </div>
        </div>
    );
}

export default Subscribe;