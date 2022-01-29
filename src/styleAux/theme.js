export const color = {
  titleHeader: "white",
  titleCard: "black",
  bgPrimary: "rgb(61, 61, 240)",
  bgSecondary: "#3f87a6",
  button: "black",
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
    background: ${color.bgPrimary} url(${url}) no-repeat;
    background-size: cover;    
    `;
};
