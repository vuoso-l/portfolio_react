import styled from "styled-components";

import { device } from "../styleAux/deviceSize";
import { color, displayFlex } from "../styleAux/theme";

export const ContactStyle = styled.div`
  ${displayFlex("flex", "column", "center", "center")};
  width: 100%;
  padding: 75px 0px;
  div {
    ${displayFlex("flex", "column", "center", "center")};
    width: 100%;
    padding: 25px 0px 150px;
  }
  a {
    padding: 30px 0px;
    color: ${({ theme }) =>
      theme === "light" ? color.lightParagraph : color.darkParagraph};
    font-size: 20px;
    :hover {
      color: darkgoldenrod;
    }
  }
  @media ${device.laptop} {
    a {
      font-size: 32px;
    }
  }
`;
