import styled from "styled-components";
import { device } from "../styleAux/deviceSize";
import { color, displayFlex } from "../styleAux/theme";

const FooterStyle = styled.footer`
  ${displayFlex("flex", "column", "center", "center")};
  background-color: ${color.bgPrimary};
  width: 100%;
  max-width: 100%;
  a {
    padding: 10px;
    color: ${color.aFooter}
  }
  @media ${device.tablet} {
    flex-direction: row;
    font-size: 20px;
  }
  @media ${device.laptop} {
    
  }
`;

export { FooterStyle };
