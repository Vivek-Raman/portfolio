import React from 'react';
import ReactDOM from 'react-dom';
import "./main.css"

import IMG_MakerOfGames from "./assets/antimage_arcana_bg.png"
import IMG_ExtendedReality from "./assets/qop_arcana_bg.png"

class TopBar extends React.Component
{
    render()
    {
        return(
            <div className="TopBar">
                <ul>
                    <li><a href="#about">Vivek Raman</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        );
    }
}

class Entry extends React.Component
{
    SetBodyBackground(section)
    {
        document.querySelector("body").style.backgroundImage = `url(${section})`;

    }

    MakerOfGames()
    {
        this.SetBodyBackground(IMG_MakerOfGames);
    }

    ExtendedReality()
    {
        this.SetBodyBackground(IMG_ExtendedReality);
    }

    render()
    {
        return (
            <div className="BigText">
            <ul>
                <li onClick={() => this.MakerOfGames()}>Maker of Games</li>
                <li onClick={() => this.ExtendedReality()}>Extended Reality</li>
            </ul>
            </div>
        );
    }
}
 
ReactDOM.render(
    <><TopBar /><Entry /></>, document.getElementById('root')
);
