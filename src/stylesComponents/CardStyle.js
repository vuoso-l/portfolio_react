import styled from "styled-components";

import { device } from "../styleAux/deviceSize";
import { displayFlex } from "../styleAux/theme";
import { color } from "../styleAux/theme";

export const CardStyle = styled.section`
  ${displayFlex("flex", "column", "center", "center")};
  width: 100%;
  padding: 20px 0px;
  border-bottom: 3px solid lightgrey;
  background: ${({ theme }) =>
    theme === "light" ? color.bgLightCard : color.bgDarkCard};
  div {
    ${displayFlex("flex", "column", "center", "center")};
    text-align: center;
    width: 100%;
    p {
      color: ${({ theme }) =>
        theme === "light" ? color.lightParagraph : color.darkParagraph};
      text-align: center;
      padding: 0px 10px;
    }
    .githubAnchor {
      color: ${({ theme }) =>
        theme === "light" ? color.lightParagraph : color.darkParagraph};
      padding: 0px 10px;
      margin-bottom: 10px;
      border-radius: 10px;
      box-shadow: 2px 2px 2px
        ${({ theme }) =>
          theme === "light" ? color.lightParagraph : color.darkParagraph};
      width: auto;
    }
    .button {
      padding: 5px 10px;
      margin: 10px 0px;
      color: ${({ theme }) =>
        theme === "light" ? color.lightParagraph : color.darkParagraph};
      background-color: ${color.bgNavigationHome};
      border-radius: 50%;
      font-size: 20px;
      &:hover {
        background-color: ${({ theme }) =>
          theme === "light" ? color.bgLightButton : color.bgDarkButton};
        color: ${({ theme }) =>
          theme === "light" ? color.darkParagraph : color.lightParagraph};
      }
    }
  }
  .link {
    padding: 20px 0px;
    margin: 1px 0;
    text-align: center;
    width: 100%;
  }
  @media ${device.tablet} {
    flex-direction: row;
  }
  @media ${device.laptop} {
    div {
      .button {
        font-size: 32px;
      }
    }
    .link {
      padding: 40px 0px;
    }
  }
`;
