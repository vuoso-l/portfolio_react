import styled from "styled-components";
import { device } from "../styleAux/deviceSize";
import { displayFlex } from "../styleAux/theme";
import { color } from "../styleAux/theme";

export const CardStyle = styled.section`
  ${displayFlex("flex", "column", "space-around", "center")};
  width: 65%;
  height: 350px;
  padding: 15px;
  margin: 15px;
  border-radius: 20px;
  box-shadow: 2px 2px 10px 5px;
  background: ${({ theme }) =>
    theme === "light" ? color.bgLightCard : color.bgDarkCard};
  .link {
    border: 1px solid;
    border-radius: 10px;
    padding: 5px 15px;
    margin: 1px 0;
    color: ${({ theme }) =>
      theme === "light" ? color.lightButton : color.darkButton};
    background-color: ${({ theme }) =>
      theme === "light" ? color.bgLightButton : color.bgDarkButton};
    font-size: 14px;
    text-align: center;
    &:hover {
      cursor: pointer;
      background-color: grey;
      color: ${color.buttonHover};
    }
  }
  @media ${device.mobileM} {
    width: 70%;
    height: 400px;
  }
  @media ${device.mobileL} {
    width: 55%;
  }
  @media ${device.tablet} {
    width: 40%;
    height: 450px;
    .link {
      font-size: 16px;
    }
  }
  @media ${device.laptop} {
    width: 35%;
    height: 450px;
    .link {
      font-size: 20px;
    }
  }
  @media ${device.laptopM} {
    width: 25%;
    .link {
      font-size: 26px;
    }
  }
`;
