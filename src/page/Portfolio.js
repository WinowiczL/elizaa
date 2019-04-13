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
      isKids: true,
      isBaby: false,
      isPregnancy: false,
      isPortrait: false,
      isFamily: false,
      isWedding: false
    });
  };

  onClickBaby = () => {
    this.setState({
      isKids: false,
      isBaby: true,
      isPregnancy: false,
      isPortrait: false,
      isFamily: false,
      isWedding: false
    });
  };

  onClickPregnancy = () => {
    this.setState({
      isKids: false,
      isBaby: false,
      isPregnancy: true,
      isPortrait: false,
      isFamily: false,
      isWedding: false
    });
  };

  onClickPortrait = () => {
    this.setState({
      isKids: false,
      isBaby: false,
      isPregnancy: false,
      isPortrait: true,
      isFamily: false,
      isWedding: false
    });
  };

  onClickFamily = () => {
    this.setState({
      isKids: false,
      isBaby: false,
      isPregnancy: false,
      isPortrait: false,
      isFamily: true,
      isWedding: false
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
