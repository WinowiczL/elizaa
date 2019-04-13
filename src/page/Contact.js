import React, { Component } from "react";
import axios from "axios";

export class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };
  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleOnSubmit = e => {
    e.preventDeafult();
    const { name, email, message } = this.state;
    const form = axios.post("/api/form", {
      name,
      email,
      message
    });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleOnSubmit}>
          <div className="form-group">
            <label for="name">Imię</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Imię"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Email"
              onChange={this.handleOnChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              Podaj adres email, na który mam odpowiedzieć.
            </small>
          </div>
          <div className="form-group">
            <label for="message">Wiadomość</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Wiadomość"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onChange={this.handleOnChange}
            />
            <label className="form-check-label" for="exampleCheck1">
              Zapoznałem się z RODO ...
            </label>
          </div>
          <button type="submit" className="btn btn-outline-info">
            Wyślij wiadomość
          </button>
        </form>
      </div>
    );
  }
}
