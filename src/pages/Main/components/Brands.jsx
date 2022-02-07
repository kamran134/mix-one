import React from "react";
import Brand1 from "../../../assets/1.png";
import Brand2 from "../../../assets/2.png";
import Brand3 from "../../../assets/3.png";
import Brand4 from "../../../assets/4.png";
import Brand5 from "../../../assets/5.png";
import Brand6 from "../../../assets/6.png";
import Brand7 from "../../../assets/7.png";
import Brand8 from "../../../assets/8.png";
import Brand9 from "../../../assets/9.png";

const Brands = () => {
    return (
        <div className="subview">
            <div className="flex-left">
                <h1>Бренды</h1>
                <p>Мы сотрудничаем с болле чем 50 знаменитых брендов.</p>
            </div>
            <div className="subview__right">
                <img src={Brand1} />
                <img src={Brand2} />
                <img src={Brand3} />
                <img src={Brand4} />
                <img src={Brand5} />
                <img src={Brand6} />
                <img src={Brand7} />
                <img src={Brand8} />
                <img src={Brand9} />
            </div>
        </div>
    );
}

export default Brands;