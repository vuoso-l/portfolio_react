import styled from "styled-components";
import { device } from "../styleAux/deviceSize";
import { color, displayFlex } from "../styleAux/theme";

export const ContainerStyle = styled.div`
  ${displayFlex("flex", "column", "center", "center")};
  max-width: 100%;
  width: 100%;
  padding: 20px 0px;
  margin-top: 30px;
  box-shadow: 3px 3px 10px grey;
  border-radius: 20px;
  background: ${({ theme }) =>
    theme === "light" ? color.bgLightPrimary : color.bgDarkPrimary};

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;