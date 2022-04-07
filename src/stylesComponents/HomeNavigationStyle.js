import styled from "styled-components";
import { device } from "../styleAux/deviceSize";
import { color, displayFlex } from "../styleAux/theme";

export const HomeNavigationStyle = styled.div`
  ${displayFlex("flex", "column", "center", "center")};
  width: 100%;
  .link {
    padding: 10px 20px;
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
  @media ${device.tablet} {
    flex-direction: row;
    .link {
      font-size: 26px;
    }
  }
  @media ${device.laptop} {
    .link {
      font-size: 32px;
    }
  }
`;
