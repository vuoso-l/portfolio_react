import styled from "styled-components";

import { device } from "../styleAux/deviceSize";
import { color, displayFlex } from "../styleAux/theme";

export const NavigationStyle = styled.div`
  ${displayFlex("flex", "row", "space-around", "center")};
  width: 100%;
  .toggle {
    background-color: ${({ theme }) =>
      theme === "light" ? "none" : color.bgDarkButton};
  }
  .linkBase,
  .link {
    padding: 10px 20px;
    color: ${({ theme }) =>
      theme === "light" ? color.lightParagraph : color.darkParagraph};
    :hover {
      color: darkgoldenrod;
    }
  }
  .linkBase {
    font-size: 24px;
  }
  @media ${device.laptop} {
    .linkBase {
      font-size: 30px;
    }
    .link {
      font-size: 24px;
    }
  }
`;
