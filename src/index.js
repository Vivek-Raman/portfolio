import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import InstagramEmbed from 'react-instagram-embed';

import "./main.css"

const SECTIONS = [
    "MakerOfGames",
    "ExtendedReality"
]

class Main extends React.Component
{
    render()
    {
        return (
            <Router>
                <div className="TopBar">
                    <ul>
                        <li><Link to="/portfolio/about">Vivek Raman</Link></li>
                        <li><Link to="/portfolio/blog">Blog</Link></li>
                        <li><Link to="/portfolio/work">Work</Link></li>
                        <li><Link to="/portfolio/contact">Contact</Link></li>
                    </ul>
                </div>
                
                <Switch>
                    <Route path="/portfolio/about">
                        <LandingPage />
                    </Route>
                    <Route path="/portfolio/blog">
                        <Blog />
                    </Route>
                    <Route path="/portfolio/">
                        <LandingPage />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

class Blog extends React.Component
{
    constructor(props)
    {
        super(props);
        document.querySelector("body").classList = []
        this.state = {
            isLoaded: false,
            data: 'err'
        }
        this.getPosts();
    }

    getPosts()
    {
        try
        {
            fetch('https://graph.instagram.com/me/media?fields=id,media_url,caption&access_token=IGQVJVRHpqdGZAOZAlZADYzVXRm5LRnFKcmI0X3BGLW9sOXlndTg1OFFVT2tjamFkLUJwcFRHUnh4TjVuYUdpb1hPR2VhN1dPN3oxVVFCNFhrVDczb0M0WU5idGdIMEZAmY0JDTGdoR1FEbzNiVXJSTk15eAZDZD')
                .then(res => res.json())
                .then((result) => {
                    
                    this.setState({
                        isLoaded: true,
                        data: result
                    });
                }
            );
        }
        catch(error)
        {
            console.error(error);
        }

        this.setState({
            posts: ""
        })
    }

    render()
    {
        if (!this.state.isLoaded)
        {
            return (<>wait</>);
        }

        return (<>
            <iframe width='480px' height='480px' src={this.state.data.data[0].media_url} />
            <br />{this.state.data.data[0].caption}
        </>);
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
            this.setState(
                {cycleCount: (this.state.cycleCount + 1) % SECTIONS.length}
            );
            this.CycleModes();
        }, 5000);

        this.SetBodyClass(SECTIONS[this.state.cycleCount]);
    }

    CycleModes()
    {
        
        this.SetBodyClass(SECTIONS[this.state.cycleCount]);
    }

    SetActiveBigText(sectionName)
    {
        this.makerOfGamesBigText.classList.remove("Active");
        this.extendedRealityBigText.remove("Active");


    }

    SetBodyClass(sectionName)
    {
        document.querySelector("body").classList = [];
        document.querySelector("body").classList.add(sectionName);
    }

    render()
    {
        this.makerOfGamesBigText = <li className={SECTIONS[0]} onClick={() => this.MakerOfGames()}>Maker of Games</li>
        this.extendedRealityBigText = <li className={SECTIONS[1]} onClick={() => this.ExtendedReality()}>Extended Reality</li>
        return (
            <div className="BigText">
            <ul>
                {this.makerOfGamesBigText}
                {this.extendedRealityBigText}
            </ul>
            </div>
        );
    }
}
 
ReactDOM.render(
    <Main />, document.getElementById('root')
);
