import styled from "styled-components";
import { device } from "../styleAux/deviceSize";
import { color, displayFlex } from "../styleAux/theme";

export const ContactStyle = styled.div`
  ${displayFlex("flex", "column", "center", "center")};
  width: 100%;
  padding: 75px 0px;
  a {
    padding: 30px 10px;
    margin: 20px 5px;
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
  @media ${device.laptop} {
    a {
      font-size: 32px;
    }
  }
`;
