import React from 'react';
import './components.css';

const Footer = () => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "150px",
            justifyContent: "space-between",
            padding: "0px 20px"
        }}>
            <div>
            <p>2019 Scarlette Villarreal Ávila</p>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
            }}>
            <a className="nounderline logo-icon" href="/AboutMe"><button className="logo"></button></a>
            </div>
            <div  style={{
                    display: "flex"
            }}>
                <a className="nounderline sn" href="https://github.com/VillarrealScarlette" target="_blank" rel="noopener noreferrer">GitHub</a>
                <p>|</p>
                <a className="nounderline sn" href="https://www.linkedin.com/in/scarlettevillarreal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </div>
    )
}

export default Footer;