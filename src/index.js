import React from 'react';
import ReactDOM from 'react-dom';
import "./main.css"

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
    func()
    {
        console.log("uwu");
    }

    render()
    {
        return (
            <div className="BigText">
            <ul>
                <li onClick={() => this.func()}>Maker of Games</li>
                <li>Extended Reality</li>
            </ul>
            </div>
        );
    }
}
 
ReactDOM.render(
    <><TopBar /><Entry /></>, document.getElementById('root')
);
