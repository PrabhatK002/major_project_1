import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.png";
import Icon3 from "../../images/svg-3.jpg";

import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH1,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} alt="Error displaying image" />
          <ServicesH2> Record Medical Data </ServicesH2>
          <ServicesP>
            {" "}
            The app helps you to store your medical data in the digital form.{" "}
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} alt="Error displaying image" />
          <ServicesH2> Full Control </ServicesH2>
          <ServicesP>
            Only you have control over your data and only you can access it.{" "}
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} alt="Error displaying image" />
          <ServicesH2> Data Sharing </ServicesH2>
          <ServicesP>
            You can share data to the only people you want.{" "}
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
