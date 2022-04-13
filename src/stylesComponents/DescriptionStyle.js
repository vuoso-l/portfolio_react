import styled from "styled-components";

import { device } from "../styleAux/deviceSize";
import { displayFlex } from "../styleAux/theme";
import { color } from "../styleAux/theme";

export const DescriptionStyle = styled.div`
  ${displayFlex("flex", "column", "center", "center")};
  width: 90%;
  height: auto;
  padding: 15px;
  margin: 15px;
  h2,
  h3 {
    padding: 5px 15px;
    margin: 1px 0;
    color: ${({ theme }) =>
      theme === "light" ? color.titleLightCard : color.titleDarkCard};
    text-align: center;
  }
  p {
    color: ${({ theme }) =>
      theme === "light" ? color.lightParagraph : color.darkParagraph};
    text-align: center;
  }
  @media ${device.mobileM} {
    width: 80%;
  }
  @media ${device.mobileL} {
    width: 65%;
  }
  @media ${device.tablet} {
    justify-content: space-around;
    width: 45%;
    height: 450px;
    h2 {
      font-size: 32px;
    }
    h3 {
      font-size: 28px;
    }
    p {
      font-size: 20px;
    }
  }
  @media ${device.laptop} {
    width: 40%;
    h2 {
      font-size: 36px;
    }
    h3 {
      font-size: 32px;
    }
    p {
      font-size: 24px;
    }
  }
`;
