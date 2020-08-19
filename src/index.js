import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

import "./main.css"

import IMG_MakerOfGames from "./assets/antimage_arcana_bg.png"
import IMG_ExtendedReality from "./assets/qop_arcana_bg.png"

const IMG_COUNT = 2;

class Main extends React.Component
{
    render()
    {
        return (
            <Router>
                <div className="TopBar">
                    <ul>
                        <li><Link to="/about">Vivek Raman</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/work">Work</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                
                <Switch>
                    <Route path="/about">
                        <LandingPage />
                    </Route>
                    <Route path="/blog">
                        <Blog />
                    </Route>
                    <Route path="/">
                        <LandingPage />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

class Blog extends React.Component
{
    render()
    {
        return (
            <div>blog</div>
        );
    }
}

class LandingPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            cycleCount: 0
        };
        
        setInterval(() => {
            this.CycleModes()
        }, 5000);

        this.SetBodyBackground(this.GetImageURLFromCycleCount());
    }

    CycleModes()
    {
        this.setState({cycleCount: (this.state.cycleCount + 1) % IMG_COUNT});

        this.SetBodyBackground(this.GetImageURLFromCycleCount());
        
    }
    
    GetImageURLFromCycleCount()
    {
        // TODO: add images to cycle here
        switch (this.state.cycleCount)
        {
            case 0: return IMG_MakerOfGames;
            case 1: return IMG_ExtendedReality;
        }
    }

    SetBodyBackground(section)
    {
        console.log(section);
        document.querySelector("body").style.backgroundImage = `url(${section})`;
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
    <Main />, document.getElementById('root')
);
