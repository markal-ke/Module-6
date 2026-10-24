import { useState } from 'react';

function BirthdayTranslator() {
  const [currentLanguage, setCurrentLanguage] = useState('english');

  const phrases = new Map([
    ['english', 'Happy Birthday'],
    ['german', 'Alles Gute zum Geburtstag'],
    ['spanish', 'Feliz cumpleaños']
  ]);

  const handleChangeLanguage = (newlang) => {
    setCurrentLanguage(newlang);
  };

  return (
    <div className="BirthdayTranslator componentBox">
      <h3>{phrases.get(currentLanguage)}! ({currentLanguage})</h3>

      <button onClick={() => handleChangeLanguage('english')}>English</button>
      <button onClick={() => handleChangeLanguage('german')}>German</button>
      <button onClick={() => handleChangeLanguage('spanish')}>Spanish</button>
    </div>
  );
}

export default BirthdayTranslator;