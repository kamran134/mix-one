import React from "react";
import CoverPhoto from '../../../assets/MIX.png';

const Cover = () => {
    return (
        <div className="cover">
            <img src={CoverPhoto} />
            <h3>Трать меньше, получай больше</h3>
        </div>
    );
}

export default Cover;