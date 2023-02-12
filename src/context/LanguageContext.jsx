import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "english";

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);

  const handleLanguage = (language) => {
    switch (language) {
      case "english":
        setLanguage("english");
        break;
      case "spanish":
        setLanguage("spanish");
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
