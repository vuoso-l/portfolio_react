import styled from "styled-components";
import { device } from "../styleAux/deviceSize";
import { displayFlex } from "../styleAux/theme";
import { color } from "../styleAux/theme";

export const CardTitleStyle = styled.section`
  ${displayFlex("flex", "column", "center", "center")};
  width: 100%;
  padding: 15px;
  .link {
    border: 1px solid;
    border-radius: 10px;
    padding: 5px 15px;
    margin: 5px 0;
    color: ${({ theme }) => (theme === "light" ? color.lightButton : color.darkButton)};
    background-color: ${({ theme }) => (theme === "light" ? color.bgLightButton : color.bgDarkButton)};
    font-size: 14px;
    text-align: center;
    &:hover {
      cursor: pointer;
      background-color: grey;
      color: ${color.buttonHover};
    }
  }
  @media ${device.tablet} {
    justify-content: space-around;
    .link {
      font-size: 16px;
    }
  }
  @media ${device.laptop} {
    .link {
      font-size: 20px;
    }
  }
`;
