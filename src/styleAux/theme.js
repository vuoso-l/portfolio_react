export const color = {
  titleHeader: "white",
  titleLightCard: "#161616",
  titleDarkCard: "#FAFAFA",
  bgLightPrimary: "radial-gradient(rgb(61, 61, 240), #3f87a6)",
  bgDarkPrimary: "black",
  bgLightCard: "white",
  bgDarkCard: "#161616",
  lightButton: "white",
  darkButton: "#161616",
  bgLightButton: "#161616",
  bgDarkButton: "aliceblue",
  buttonHover: "white",
  aFooter: "white",
};

export const displayFlex = (display, direction, justifyContent, alignItem) => {
  return `
    display: ${display};
    flex-direction: ${direction};
    justify-content: ${justifyContent};
    align-items: ${alignItem};
    `;
};

export const backgroundHeader = (url) => {
  return `
    background: ${color.bgLightCard} url(${url}) no-repeat;
    background-size: cover;    
    `;
};
