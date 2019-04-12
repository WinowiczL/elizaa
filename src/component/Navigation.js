import React from "react";
import "./Navigation.css";
import logo from "../../src/logoWelcome.jpg";

export class Navigation extends React.Component {
  state = {
    isContactModalOpen: false
  };

  handleOnClick = () => {
    this.setState({
      isContactModalOpen: true
    });
  };

  handleOnClose = () => {
    this.setState({
      isContactModalOpen: false
    });
  };

  render() {
    return (
      <>
        <div className="row my-2 justify-content-center">
          <img src={logo} alt="logo" className="img-fluid mx-auto d-block" />
        </div>

        <div className="container">
          <nav className="nav my-4 flex-column flex-md-row nav-fill">
            <div
              className="navigation 
            nav-link nav-item active"
            >
              Strona główna
            </div>
            <div
              className="navigation 
            nav-link nav-item"
            >
              Portfolio
            </div>
            <div
              className="navigation 
            nav-link nav-item"
            >
              Opinie
            </div>
            <div
              className="navigation 
            nav-link nav-item"
            >
              Cennik
            </div>
            <div
              className="navigation 
            nav-link nav-item active"
            >
              Studio
            </div>
            <div
              className="navigation 
            nav-link nav-item"
            >
              Kontakt
            </div>
          </nav>
          <div className="navigation-line mb-5" />
        </div>
      </>
    );
  }
}
