import styled from "styled-components";
import { device } from "../styleAux/deviceSize";
import { color, displayFlex } from "../styleAux/theme";

const FooterStyle = styled.footer`
  ${displayFlex("flex", "column", "center", "center")};
  width: 100%;
  max-width: 100%;
  a {
    padding: 10px;
    color: ${({ theme }) =>
      theme === "light" ? color.titleLightCard : color.titleDarkCard};
    &:hover {
      color: ${color.aFooter};
    }
  }
  @media ${device.tablet} {
    flex-direction: row;
    font-size: 20px;
  }
  @media ${device.laptop} {
    font-size: 26px;
  }
`;

export { FooterStyle };
