import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "English";

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);

  const handleLanguage = (language) => {
    console.log(language);
    switch (language) {
      case "English":
        console.log("en click");
        setLanguage("English");
        break;
      case "Espanish":
        console.log("es click");
        setLanguage("Espanish");
        break;
      default:
        break;
    }
  };

  const data = { language, handleLanguage };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };

export default LanguageContext;
