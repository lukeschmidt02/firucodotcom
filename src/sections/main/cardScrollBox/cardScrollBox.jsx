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
        primary="First Blog Post for HunTaGo"
        secondary="7/11/2023"
        url="https://medium.com/@lukeschmidt02"
      >
        This is my first post to my blog. I am thriled to be sharing my
        development process as an aspiring app developer with the world!
      </CardComponent>
      <CardComponent
        primary="First Blog Post for HunTaGo"
        secondary="7/11/2023"
        url="https://medium.com/@lukeschmidt02"
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
