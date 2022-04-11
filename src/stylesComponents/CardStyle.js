import styled from "styled-components";
import { device } from "../styleAux/deviceSize";
import { displayFlex } from "../styleAux/theme";
import { color } from "../styleAux/theme";

export const CardStyle = styled.section`
  ${displayFlex("flex", "column", "center", "center")};
  width: 100%;
  padding-top: 10px;
  border-bottom: 2px solid lightgrey;
  background: ${({ theme }) =>
    theme === "light" ? color.bgLightCard : color.bgDarkCard};
  .link {
    padding: 20px 0px;
    margin: 1px 0;
    text-align: center;
    width: 100%;
  }
  @media ${device.tablet} {
    flex-direction: row;
  }
  @media ${device.laptop} {
    .link {
      padding: 40px 0px;
    }
  }
`;
