import { useState } from "react";
import { Button } from "@nextui-org/react";
import privacyPolicyHuntagoPDF from "../../assets/Huntago_Privacy_Policy.pdf";
import eulaHuntagoPDF from "../../assets/Huntago_EULA.pdf";
import termsHuntagoPDF from "../../assets/Huntago_Terms_and_Conditions.pdf";
import styled from "styled-components";

const DesktopPageStyler = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: rgb(101, 88, 138);
`;

const StyledIframe = styled.iframe`
  width: 80%;
  flex-grow: 1;
  border: 0;
`;

const ResponsiveHeader = styled.h1`
  color: white;
  text-align: center;
  font-size: 2rem; /* Default size */

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Smaller screens */
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 1.75rem; /* Medium screens */
  }

  @media (min-width: 1025px) {
    font-size: 2rem; /* Larger screens */
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; /* Adjust the gap between buttons as needed */
`;

export function HuntagoLegal() {
  const [currentPDF, setCurrentPDF] = useState({
    url: privacyPolicyHuntagoPDF,
    selected: "privacyPolicy",
  });

  const getButtonColor = (buttonName) => {
    return currentPDF.selected === buttonName ? "secondary" : "primary";
  };

  return (
    <DesktopPageStyler>
      <ResponsiveHeader>Huntago Legal</ResponsiveHeader>
      <ButtonContainer>
        <Button
          auto
          color={getButtonColor("privacyPolicy")}
          onClick={() =>
            setCurrentPDF({
              url: privacyPolicyHuntagoPDF,
              selected: "privacyPolicy",
            })
          }
        >
          Privacy Policy
        </Button>
        <Button
          auto
          color={getButtonColor("terms")}
          onClick={() =>
            setCurrentPDF({ url: termsHuntagoPDF, selected: "terms" })
          }
        >
          Terms and Conditions
        </Button>
        <Button
          auto
          color={getButtonColor("eula")}
          onClick={() =>
            setCurrentPDF({ url: eulaHuntagoPDF, selected: "eula" })
          }
        >
          EULA
        </Button>
      </ButtonContainer>
      <StyledIframe src={currentPDF.url} title="Huntago Legal Documents">
        This browser does not support PDFs. Please download the PDF to view it:
        <a href={currentPDF.url}>Download PDF</a>.
      </StyledIframe>
    </DesktopPageStyler>
  );
}
