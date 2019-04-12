import React, { Component } from "react";
import { Page } from "./component/Page";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faClock,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

library.add(faPhone);
library.add(faClock);
library.add(faEnvelope);

class App extends Component {
  render() {
    return <Page />;
  }
}

export default App;
