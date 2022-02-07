import React from "react";
import './footer.css';
import ESLogo from '../assets/ES-logo.png';

const MixOneFooter = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer__left-side">
                    <div className="footer__logo">
                        <img src={ESLogo} />
                        <p>ELEMENT<br/>SOFTWARE</p>
                    </div>
                    <div className="footer__copyright">
                        © Copyright 2022. All Rights Reserved. 
                    </div>
                    <div className="footer__links">
                        <a href='/terms'>Terms</a>
                        <a href='/privacy'>Privacy</a>
                    </div>
                </div>
                <div className="footer__right-side">
                    <a href="/instagram">Instagram</a>
                    <a href="/e-mail">E-mail</a>
                    <a href="/facebook">Facebook</a>
                    <a href="/contacts">Contacts</a>
                </div>
            </div>
        </div>
    );
}

export default MixOneFooter;