import React from "react";
import { Navigation } from "./Navigation";
import { SimpleSlider } from "./Carousel";
import { SecondContent } from "./SecondContent";
import { AboutMe } from "./AboutMe";
import { ThirdContent } from "./ThirdContent";
import { Opinions } from "./Opinions";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Welcome } from "../page/welcome";

export class Page extends React.Component {
  state = {};

  render() {
    return (
      <>
        <Navigation />
        <SimpleSlider />
        <SecondContent />
        <AboutMe />
        <ThirdContent />
        <Opinions />
        <Footer />
      </>
    );
  }
}
