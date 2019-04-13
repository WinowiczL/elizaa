import React from "react";
import { SimpleSlider } from "../component/Carousel";
import { SecondContent } from "../component/SecondContent";
import { AboutMe } from "../component/AboutMe";
import { ThirdContent } from "../component/ThirdContent";
import { Opinions } from "../component/Opinions";

export class WelcomePage extends React.Component {
  state = {};

  render() {
    return (
      <>
        <SimpleSlider />
        <SecondContent />
        <ThirdContent />
        <AboutMe />
        <Opinions />
      </>
    );
  }
}
