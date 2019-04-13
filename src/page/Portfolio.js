import React from "react";
import { Kids } from "../component/PortfolioPhotos/Kids";
import { Baby } from "../component/PortfolioPhotos/Baby";
import { Pregnancy } from "../component/PortfolioPhotos/Pregnancy";
import { Portrait } from "../component/PortfolioPhotos/Portrait";
import { Family } from "../component/PortfolioPhotos/Family";
import { Wedding } from "../component/PortfolioPhotos/Wedding";

export class Portfolio extends React.Component {
  state = {
    isKids: true,
    isBaby: false,
    isPregnancy: false,
    isPortrait: false,
    isFamily: false,
    isWedding: false
  };

  render() {
    return (
      <div className="container">
        <div className="row mb-5">
          <button
            type="button"
            className="btn btn-outline-info mx-auto"
            onClick={this.onClickBaby}
          >
            Sesje noworodkowe
          </button>

          <button
            type="button"
            className="btn btn-outline-info mx-auto"
            onClick={this.onClickKids}
          >
            Sesje dziecięce
          </button>

          <button
            type="button"
            className="btn btn-outline-info mx-auto"
            onClick={this.onClickPregnancy}
          >
            Sesje ciązowe
          </button>

          <button
            type="button"
            className="btn btn-outline-info mx-auto"
            onClick={this.onClickPortrait}
          >
            Sesje portretowe
          </button>

          <button
            type="button"
            className="btn btn-outline-info mx-auto"
            onClick={this.onClickFamily}
          >
            Sesje rodzinne
          </button>

          <button
            type="button"
            className="btn btn-outline-info mx-auto"
            onClick={this.onClickWedding}
          >
            Sesje slubne
          </button>
        </div>
        <div className="row">
          {this.state.isKids && <Kids />}
          {this.state.isBaby && <Baby />}
          {this.state.isPregnancy && <Pregnancy />}
          {this.state.isPortrait && <Portrait />}
          {this.state.isFamily && <Family />}
          {this.state.isWedding && <Wedding />}
        </div>
      </div>
    );
  }

  onClickKids = () => {
    this.setState({
      isBaby: false,
      isPregnancy: false,
      isPortrait: false,
      isFamily: false,
      isWedding: false,
      isKids: true
    });
  };

  onClickBaby = () => {
    this.setState({
      isKids: false,
      isPregnancy: false,
      isPortrait: false,
      isFamily: false,
      isWedding: false,
      isBaby: true
    });
  };

  onClickPregnancy = () => {
    this.setState({
      isKids: false,
      isBaby: false,
      isPortrait: false,
      isFamily: false,
      isWedding: false,
      isPregnancy: true
    });
  };

  onClickPortrait = () => {
    this.setState({
      isKids: false,
      isBaby: false,
      isPregnancy: false,
      isFamily: false,
      isWedding: false,
      isPortrait: true
    });
  };

  onClickFamily = () => {
    this.setState({
      isKids: false,
      isBaby: false,
      isPregnancy: false,
      isPortrait: false,
      isWedding: false,
      isFamily: true
    });
  };

  onClickWedding = () => {
    this.setState({
      isKids: false,
      isBaby: false,
      isPregnancy: false,
      isPortrait: false,
      isFamily: false,
      isWedding: true
    });
  };
}
