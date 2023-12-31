import styled from "styled-components";
import PropTypes from "prop-types";
import { CardComponent, CheckFullBlog } from "../card/card";

const ScrollBoxStyler = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  width: 80vw;
  height: 80vh;
  background-color: lightgray;
  border-radius: 20px;
  overflow: scroll;
  border: 1px solid lightgray;
`;

export const CardScrollBox = () => {
  return (
    <ScrollBoxStyler>
      <CardComponent
        primary="Big Developments and Course Correcting"
        secondary="8/01/2023"
        url="https://medium.com/@lukeschmidt02/big-developments-and-course-correcting-2937ef65c129"
      >
        Greetings, everyone! It’s been a little while since I’ve provided an
        update on my latest project, the Huntago app. There’s been a lot of code
        crunching, head-scratching, and “Eureka!” moments, and today, I’m
        thrilled to share with ...
      </CardComponent>
      <CardComponent
        primary="HunTaGo in its first couple days"
        secondary="7/14/2023"
        url="https://medium.com/@lukeschmidt02/huntago-in-its-first-couple-days-3c44abee50ac"
      >
        I have decided, unlike my previous Unity built app Dino Glide, I will be
        building HunTaGo in React Native. I took a long course on Udemy
        understanding React and React Native because before taking the class I
        was very unfamiliar with ...
      </CardComponent>
      <CardComponent
        primary="HunTaGo at its Essential"
        secondary="7/14/2023"
        url="https://medium.com/@lukeschmidt02/huntago-at-its-essential-f54f49c51675"
      >
        From building and successfully launching Dino Glide, I discovered my
        true passion for app development. Eager to explore new horizons and
        cater to a different audience, I am now embarking on an exciting venture
        with my next app. While ...
      </CardComponent>
      <CardComponent
        primary="First Blog Post for HunTaGo"
        secondary="7/11/2023"
        url="https://medium.com/@lukeschmidt02/first-blog-post-for-huntago-50614cc10a93"
      >
        This is my first post to my blog. I am thriled to be sharing my
        development process as an aspiring app developer with the world!
      </CardComponent>
      <CheckFullBlog />
    </ScrollBoxStyler>
  );
};

CardComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  primary: PropTypes.string,
  secondary: PropTypes.string,
  url: PropTypes.string,
};
