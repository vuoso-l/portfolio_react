import styled from "styled-components";
import { device } from "../styleAux/deviceSize";
import { color, displayFlex } from "../styleAux/theme";

export const HeaderStyle = styled.header`
  ${displayFlex("flex", "column", "space-between", "center")};
  width: 100%;
  height: 150px;
  padding: 0px 20px;
  background-color: ${color.bgPrimary};
  img {
    width: 150px;
  }
  @media ${device.laptop} {
    img {
      width: 200px;
    }
  }
`;
