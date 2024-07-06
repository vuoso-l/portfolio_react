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
  padding: 0px 10px;
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
  width: 50%;
  height: auto;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.2s;
  }
`;

export const ImgPresentation = styled.img`
  width: 80%;
  border-radius: 50%;
  @media ${device.mobileM} {
    width: 50%;
  }
  @media ${device.mobileL} {
    width: 40%;
  }
  @media ${device.tablet} {
    width: 30%;
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
  padding: 20px 0px;
  margin: 1px 0;
  text-align: center;
  width: 100%;
  @media ${device.laptop} {
    padding: 40px 0px;
  }
`;

export const ButtonDownload = styled.button`
  padding: 4px;
  font-size: 14px;
  color: ${({ theme }) =>
    theme === "light" ? color.lightParagraph : color.darkParagraph};
  background-color: ${color.bgNavigationHome};
  border-radius: 70px;
  &:hover {
    background-color: ${({ theme }) =>
      theme === "light" ? color.bgLightButton : color.bgDarkButton};
    color: ${({ theme }) =>
      theme === "light" ? color.darkParagraph : color.lightParagraph};
  }
  @media ${device.tablet} {
    padding: 6px;
    font-size: 16px;
  }
`;

export const CardBorder = styled.div`
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 2px solid;
`;
