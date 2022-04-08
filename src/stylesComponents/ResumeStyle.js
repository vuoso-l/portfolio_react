import styled from "styled-components";
import { device } from "../styleAux/deviceSize";
import { color, displayFlex } from "../styleAux/theme";

export const ResumeStyle = styled.div`
  ${displayFlex("flex", "column", "center", "center")};
  width: 100%;
  padding: 25px 0px;
  p {
    width: 90%;
    text-align: center;
    color: ${({ theme }) =>
      theme === "light" ? color.titleLightCard : color.titleDarkCard};
  }
  .container,
  .techStack,
  .languages,
  .academic,
  .experience {
    ${displayFlex("flex", "column", "center", "center")};
    width: 100%;
    padding: 20px 0px;
    p,
    h4 {
      color: ${({ theme }) =>
        theme === "light" ? color.titleLightCard : color.titleDarkCard};
    }
    p,
    h4 {
      text-align: center;
      padding-left: 10px;
    }
  }
  @media ${device.tablet} {
    p {
      width: 70%;
    }
    .container {
      flex-direction: row;
      flex-wrap: wrap;
      padding: 50px 0px;
      .techStack,
      .academic,
      .experience {
        width: 50%;
      }
    }
  }
  @media ${device.laptop} {
    .techStack,
    .academic,
    .experience {
      p {
        font-size: 18px;
      }
      h4 {
        font-size: 26px;
      }
    }
  }
  @media ${device.laptopM} {
    .techStack,
    .academic,
    .experience {
      p {
        font-size: 24px;
      }
      h4 {
        font-size: 32px;
      }
    }
  }
`;
