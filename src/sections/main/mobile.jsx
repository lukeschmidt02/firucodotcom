import styled from "styled-components";
import { Button } from "@nextui-org/react";

import { AppIcon } from "./appicon/appicon";
import { CardScrollBox } from "./cardScrollBox/cardScrollBox";

const DesktopPageStyler = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: rgb(101, 88, 138);
`;

const FirucoSplash = styled.img`
  width: 100%;
  height: 100%;

  max-width: 60vw;
`;

const DinoGlideRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
`;

const ButtonComponent = () => (
  <Button
    onClick={() => {
      window.location.href = "https://linktr.ee/dinoglide";
    }}
  >
    Check out Dino Glide!
  </Button>
);

export const MobilePage = () => {
  return (
    <DesktopPageStyler>
      <FirucoSplash
        src="https://i.ibb.co/XJqbNwq/Firuco-Splash.png"
        alt="Firuco"
      />
      <DinoGlideRow>
        <ButtonComponent />
        <AppIcon />
      </DinoGlideRow>
      <CardScrollBox />
    </DesktopPageStyler>
  );
};
