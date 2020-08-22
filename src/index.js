import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Link, Redirect } from 'react-router-dom';

import "./main.css"
import { LandingPage } from './LandingPage';
import { Blog } from './Blog';

export const SECTIONS = [
    "MakerOfGames",
    "ExtendedReality"
]

class Main extends React.Component
{
    render()
    {
        return (
            <Router>
                <nav><div className="TopBar">
                    <ul>
                        <li><Link to="/portfolio/about">Vivek Raman</Link></li>
                        <li><Link to="/portfolio/blog">Blog</Link></li>
                        <li><Link to="/portfolio/work">Work</Link></li>
                        <li><Link to="/portfolio/contact">Contact</Link></li>
                    </ul>
                </div></nav>
                
                <Switch>
                    <Route path="/portfolio/about">
                        <LandingPage />
                    </Route>
                    <Route path="/portfolio/blog">
                        <Blog />
                    </Route>
                    <Route path="/portfolio/*">
                        <Redirect to="/portfolio/about" />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(
    <Main />, document.getElementById('root')
);
