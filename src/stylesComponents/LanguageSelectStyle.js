import styled from "styled-components";

import { device } from "../styleAux/deviceSize";

export const LanguageSelectStyle = styled.div`
  button {
    border: none;
    cursor: pointer;
    width: 30px;
    background: none;
    margin-left: 5px;
  }
  @media ${device.laptop} {
    button {
      width: 50px;
    }
  }
`;
