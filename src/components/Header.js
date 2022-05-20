import React from "react"
import ReactDOM from "react-dom/client"
import TrollFace from "./Troll Face.svg"
import style from "./style.css"
function Header(){
    return  (
        <header className="header">
            <img className ="header--img"src={TrollFace}></img>
            <h2 className="header--title">Meme Generator</h2>
            <h3 className="header--subtitle">React-Course Project3</h3>

        </header>
    );
}

export default Header;