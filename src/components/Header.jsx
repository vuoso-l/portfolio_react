import { HeaderStyle } from "../stylesComponents/HeaderStyle";
import bannerImage from "../assets/img/banner.png";
import mobileBannerImage from "../assets/img/mobile_banner.png";
import { size } from "../styleAux/deviceSize";
import useWindowWidth from "../hooks/useWindowWidth";

import Navegation from "./Navegation";

const Header = () => {
  const windowWidth = useWindowWidth();
  const isMinorTablet = windowWidth <= size.tablet;

  console.log({ windowWidth, size: size.tablet });

  return (
    <>
      <HeaderStyle>
        <img
          src={isMinorTablet ? mobileBannerImage : bannerImage}
          alt="Banner image"
        />
        {/* Commented this code because I don´t use it now */}
        {/* <label theme={theme}>
          {theme === "light" ? imgMoon : imgSun}
          <input
            type="checkbox"
            onClick={(e) => handleTheme(e)}
            value={theme}
          />
        </label> */}
      </HeaderStyle>
      <Navegation />
    </>
  );
};

export default Header;
