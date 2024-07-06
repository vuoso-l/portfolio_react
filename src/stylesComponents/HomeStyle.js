import styled from "styled-components";

import { color, displayFlex } from "../styleAux/theme";

export const HomeStyle = styled.div`
  ${displayFlex("flex", "column", "center", "center")};
  max-width: 100%;
  width: 100%;
  padding: 20px 0px;
  margin: 50px 0px;
  background: ${({ theme }) =>
    theme === "light" ? color.bgLightPrimary : color.bgDarkPrimary};
  h2 {
    padding-bottom: 15px;
    margin: 1px 0;
    color: ${({ theme }) =>
      theme === "light" ? color.titleLightCard : color.titleDarkCard};
    text-align: center;
  }
`;
