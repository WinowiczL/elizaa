import React, { Component } from "react";
import { WelcomePage } from "./page/WelcomePage";
import { Navigation } from "./component/Navigation";
import { Footer } from "./component/Footer";
import { Portfolio } from "./page/Portfolio";
import { Contact } from "./page/Contact";

import "./App.css";

class App extends Component {
  state = {
    isWelcomeOpen: true,
    isPortfolioOpen: false,
    isContactOpen: false,
    choosenOption: "welcome"
  };

  render() {
    return (
      <>
        <Navigation
          isActive={this.state.choosenOption}
          portfolio={this.handleOnClickPortfolio}
          welcome={this.handleOnClickWelcome}
          contact={this.handleOnClickContact}
        />
        {this.state.isPortfolioOpen && <Portfolio />}
        {this.state.isWelcomeOpen && <WelcomePage />}
        {this.state.isContactOpen && <Contact />}
        <Footer />
      </>
    );
  }

  handleOnClickPortfolio = () => {
    this.setState({
      choosenOption: "portfolio",
      isWelcomeOpen: false,
      isContactOpen: false,
      isPortfolioOpen: true
    });
  };

  handleOnClickWelcome = () => {
    this.setState({
      choosenOption: "welcome",
      isPortfolioOpen: false,
      isContactOpen: false,
      isWelcomeOpen: true
    });
  };

  handleOnClickContact = () => {
    this.setState({
      choosenOption: "contact",
      isPortfolioOpen: false,
      isWelcomeOpen: false,
      isContactOpen: true
    });
  };
}

export default App;
