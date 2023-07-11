import styled from "styled-components";

const AppIconStyler = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-grow: 1;
  border: 1px solid black;
  border-radius: 20px;
  overflow: hidden;
  width: 80px;
  height: 80px;
`;

export const AppIcon = () => {
  return (
    <AppIconStyler>
      <img
        src="https://i.ibb.co/MZKmnm6/App-Icon-transformed.png"
        alt="Dino Glide App Icon"
      />
    </AppIconStyler>
  );
};
