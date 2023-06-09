import React, { useContext } from 'react';
import { LanguageContext } from "../LanguageProvider/LanguageProvider.jsx";

const LanguageUpdate = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <button onClick={toggleLanguage}>
        {language === 'english' ? 'Switch to Japon' : 'Switch to English'}
      </button>
    </div>
  );
};

export default LanguageUpdate;
