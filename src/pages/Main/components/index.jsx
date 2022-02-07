import React from "react";
import Brands from "./Brands";
import Coupones from "./Coupones";
import Cover from "./Cover";
import './main.css';
import MobileApp from "./MobileApp";
import Subscribe from "./Subscribe";

export default () => {
    return (
        <>
            <Cover />
            <Coupones />
            <Brands />
            <Subscribe />
            <MobileApp />
        </>
    );
}