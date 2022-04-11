import styled from "styled-components";
import { color, displayFlex } from "../styleAux/theme";

export const ProjectsStyle = styled.div`
  ${displayFlex("flex", "row", "center", "center")};
  flex-wrap: wrap;
  max-width: 100%;
  width: 100%;
  background: ${({ theme }) =>
    theme === "light" ? color.bgLightPrimary : color.bgDarkPrimary};
`;
