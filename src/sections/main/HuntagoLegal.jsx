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
  width: 100%;
  height: auto;
  min-height: 500px;
  flex-grow: 1;
  border: 0;
  overflow-y: auto;

  @media (max-width: 768px) {
    display: none; /* Hide iframe on mobile */
  }
`;

const ResponsiveHeader = styled.h1`
  color: white;
  text-align: center;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

function isMobileDevice() {
  return window.innerWidth <= 768;
}

export function HuntagoLegal() {
  const [currentPDF, setCurrentPDF] = useState(privacyPolicyHuntagoPDF);

  const handleButtonClick = (pdfUrl) => {
    if (isMobileDevice()) {
      // Open the PDF directly for mobile devices
      window.open(pdfUrl, "_blank");
    } else {
      // Update the iframe source for non-mobile devices
      setCurrentPDF(pdfUrl);
    }
  };

  return (
    <DesktopPageStyler>
      <ResponsiveHeader>Huntago Legal</ResponsiveHeader>
      <ButtonContainer>
        <Button auto onClick={() => handleButtonClick(privacyPolicyHuntagoPDF)}>
          Privacy Policy
        </Button>
        <Button auto onClick={() => handleButtonClick(termsHuntagoPDF)}>
          Terms and Conditions
        </Button>
        <Button auto onClick={() => handleButtonClick(eulaHuntagoPDF)}>
          EULA
        </Button>
      </ButtonContainer>
      <StyledIframe src={currentPDF} title="Huntago Legal Documents" />
    </DesktopPageStyler>
  );
}
