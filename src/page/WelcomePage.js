import React from "react";
import { SimpleSlider } from "../component/Carousel";
import { SecondContent } from "../component/SecondContent";
import { FourthContent } from "../component/FourthContent";
import { AboutMe } from "../component/AboutMe";
import { ThirdContent } from "../component/ThirdContent";
import { Opinions } from "../component/Opinions";
import Fade from "react-reveal/Fade";

const animateList = [
  <SecondContent />,
  <SimpleSlider />,
  <FourthContent />,
  <ThirdContent />,
  <AboutMe />,
  <Opinions />
];

export class WelcomePage extends React.Component {
  state = {};

  render() {
    return (
      <>
        {animateList.map((item, key) => (
          <div key={key}>
            <Fade top>{item}</Fade>
          </div>
        ))}
      </>
    );
  }
}
