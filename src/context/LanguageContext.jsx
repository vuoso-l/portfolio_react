import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "English";

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);

  const handleLanguage = (e) => {
    switch (e.target.value) {
      case "English":
        setLanguage("English");
        break;
      case "Espanish":
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
