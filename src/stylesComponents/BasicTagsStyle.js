import styled from "styled-components";
import { device } from "../styleAux/deviceSize";
import { color } from "../styleAux/theme";
import { displayFlex } from "../styleAux/theme";

export const H1Style = styled.h1`
  text-shadow: 4px 4px 8px grey;
  text-align: center;
  padding-top: 10px;
  border-top: 2px solid white;
  color: ${color.titleHeader};
`;

export const H2Style = styled.h2`
  text-shadow: 4px 4px 4px grey;
  text-align: center;
  color: ${color.titleHeader};
`;

export const H2CardStyle = styled(H2Style)`
  color: ${({ theme }) =>
    theme === "light" ? color.titleLightCard : color.titleDarkCard};
`;

export const H3CardStyle = styled.h3`
  text-shadow: 4px 4px 4px grey;
  text-align: center;
  color: ${({ theme }) =>
    theme === "light" ? color.titleLightCard : color.titleDarkCard};
  @media ${device.tablet} {
    width: 100%;
  }
`;

export const H4Style = styled.h4`
  text-shadow: 4px 4px 4px grey;
  font-weight: bold;
  text-align: center;
  padding-bottom: 30px;
  color: ${color.titleHeader};
`;

export const ImgStyle = styled.img`
  width: 70%;
  height: auto;
  border-radius: 10px;
  @media ${device.mobileM} {
    width: 80%;
  }
  @media ${device.laptop} {
    width: 60%;
    height: 50%;
  }
`;

export const ElementCardImg = styled(ImgStyle)`
  &:hover {
    cursor: pointer;
  }
`;

export const ImgPresentation = styled.img`
  width: 80%;
  border-radius: 50%;
  @media ${device.mobileM} {
    width: 80%;
  }
  @media ${device.mobileL} {
    width: 70%;
  }
  @media ${device.tablet} {
    width: 50%;
  }
  @media ${device.laptop} {
    width: 40%;
  }
`;

export const CardContainer = styled.div`
  ${displayFlex("flex", "column", "center", "center")};
  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const GralAnchor = styled.a`
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
  @media ${device.tablet} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
`;
