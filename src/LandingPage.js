import React from 'react';
import { SECTIONS } from './index';

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
    }

    SetActiveBigText(sectionName) {
        this.makerOfGamesBigText.classList.remove("Active");
        this.extendedRealityBigText.remove("Active");


    }

    SetBodyClass(sectionName) {
        document.querySelector("body").classList = [];
        document.querySelector("body").classList.add(sectionName);
    }

    render() {
        this.makerOfGamesBigText = <li className={SECTIONS[0]} onClick={() => this.MakerOfGames()}>Maker of Games</li>;
        this.extendedRealityBigText = <li className={SECTIONS[1]} onClick={() => this.ExtendedReality()}>Extended Reality</li>;
        return (
            <div className="BigText">
                <ul>
                    {this.makerOfGamesBigText}
                    {this.extendedRealityBigText}
                </ul>
            </div>
        );
    }

    componentWillUnmount() {
        clearInterval(this.state.cycle);
    }
}
