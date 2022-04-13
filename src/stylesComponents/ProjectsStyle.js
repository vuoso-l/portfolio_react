import styled from "styled-components";

import { device } from "../styleAux/deviceSize";
import { color, displayFlex } from "../styleAux/theme";

export const ProjectsStyle = styled.div`
  ${displayFlex("flex", "column", "center", "center")};
  width: 100%;
  padding: 25px 0px;
  .container {
    ${displayFlex("flex", "column", "center", "center")};
    width: 100%;
    padding-top: 10px;
  }
  @media ${device.tablet} {
    .container {
      flex-direction: row;
      flex-wrap: wrap;
      padding: 20px 0px;
    }
  }
  /*  ${displayFlex("flex", "row", "center", "center")};
  flex-wrap: wrap;
  max-width: 100%;
  width: 100%;
  background: ${({ theme }) =>
    theme === "light" ? color.bgLightPrimary : color.bgDarkPrimary}; */
`;
