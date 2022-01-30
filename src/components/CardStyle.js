import styled from "styled-components";
import { device } from "../styleAux/deviceSize";
import { displayFlex } from "../styleAux/theme";
import { color } from "../styleAux/theme";

export const CardStyle = styled.section`
  ${displayFlex("", "column", "center", "center")};
  display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
  width: 90%;
  height: auto;
  padding: 15px;
  margin: 15px;
  border-radius: 20px;
  background-color: white;
  .link {
    border: 1px solid;
    border-radius: 10px;
    padding: 5px 15px;
    margin: 1px 0;
    color: ${color.button};
    background-color: aliceblue;
    font-size: 14px;
    text-align: center;
    &:hover {
      cursor: pointer;
      background-color: grey;
      color: ${color.buttonHover};
    }
  }
  @media ${device.mobileM} {
    width: 80%;
  }
  @media ${device.mobileL} {
    width: 65%;
  }
  @media ${device.tablet} {
    justify-content: space-around;
    width: 45%;
    height: 450px;
    .link {
      font-size: 16px;
    }
  }
  @media ${device.laptop} {
    width: 40%;
    .link {
      font-size: 20px;
    }
  }
`;
