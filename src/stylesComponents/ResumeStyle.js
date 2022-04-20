import styled from "styled-components";

import { device } from "../styleAux/deviceSize";
import { color, displayFlex } from "../styleAux/theme";

export const ResumeStyle = styled.div`
  ${displayFlex("flex", "column", "center", "center")};
  width: 100%;
  padding: 25px 0px;
  p {
    width: 90%;
    text-align: center;
    color: ${({ theme }) =>
      theme === "light" ? color.titleLightCard : color.titleDarkCard};
  }
  .container,
  section {
    ${displayFlex("flex", "column", "center", "center")};
    width: 100%;
    padding-top: 10px;
    div {
      padding: 10px 0px;
      p,
      h4,
      h5,
      h6,
      a {
        color: ${({ theme }) =>
          theme === "light" ? color.titleLightCard : color.titleDarkCard};
      }
      p {
        text-align: center;
      }
      a {
        padding: 0px 10px;
        margin-bottom: 10px;
        border-radius: 10px;
        box-shadow: 2px 2px 2px
          ${({ theme }) =>
            theme === "light" ? color.lightParagraph : color.darkParagraph};
        width: auto;
      }
    }
  }
  section {
    border-bottom: 2px solid lightgrey;
  }
  @media ${device.tablet} {
    p {
      width: 70%;
    }
    .container {
      flex-direction: row;
      flex-wrap: wrap;
      padding: 20px 0px;
      section {
        ${displayFlex("flex", "row", "flex-start", "center")};
        width: 100%;
        div {
          ${displayFlex("flex", "column", "center", "center")};
          width: 100%;
          h4,
          h5,
          h6 {
            align-self: flex-start;
            padding-left: 50px;
          }
        }
      }
    }
  }
  @media ${device.laptop} {
    .container {
      section {
        div {
          h4,
          h5,
          h6 {
            padding-left: 100px;
          }
        }
      }
    }
  }
  @media ${device.laptopM} {
    .container {
      section {
        div {
          h4,
          h5,
          h6 {
            padding-left: 140px;
          }
        }
      }
    }
  }
`;
