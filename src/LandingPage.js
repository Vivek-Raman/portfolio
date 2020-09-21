import React from 'react';

const SECTIONS = [
    "MakerOfGames",
    "ExtendedReality"
]

export class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        
        let cycle = setInterval(() => this.CycleModes(), 5000);
        
        this.state = {
            cycleCount: 0,
            cycle: cycle
        };

        this.SetBodyClass(SECTIONS[this.state.cycleCount]);
        
    }

    CycleModes() {
        this.setState(
            { cycleCount: (this.state.cycleCount + 1) % SECTIONS.length }
        );
        this.SetBodyClass(SECTIONS[this.state.cycleCount]);
        this.SetActiveBigText(SECTIONS[this.state.cycleCount]);
    }

    SetActiveBigText(sectionName) {
        document.getElementById(SECTIONS[0]).classList.remove("Active");
        document.getElementById(SECTIONS[1]).classList.remove("Active");

        if (sectionName === "MakerOfGames")
        {
            document.getElementById(SECTIONS[0]).classList.add("Active");
        }
        else
        {
            document.getElementById(SECTIONS[1]).classList.add("Active");
        }
    }

    SetBodyClass(sectionName) {
        document.querySelector("body").classList = [];
        document.querySelector("body").classList.add(sectionName);
    }

    render() {
        
        return (
            <div className="BigText">
                <ul>
                    <li id={SECTIONS[0]} onClick={() => this.MakerOfGames()}>Maker of Games</li>
                    <li id={SECTIONS[1]} onClick={() => this.ExtendedReality()}>Extended Reality</li>
                </ul>
            </div>
        );
    }

    componentWillUnmount() {
        this.clearBodyBackground();
        clearInterval(this.state.cycle);
    }
}
