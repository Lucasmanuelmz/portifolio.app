import { useState, useEffect } from 'react';
import Header from './Header';
import PrincipalComponent from './Body';
import './App.css';
import Footer from './Footer';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#F5F5DC');
  const [textColor, setTextColor] = useState('#333');
  const [specialColor, setSpecialColor] = useState('#444');
  const [footerColor, setFooterColor] = useState('#E0E0E0');
  const [boxShadow, setBoxShadow] = useState('#E0E0E0 2px 2px 2px 2px');
  const [darkModeActivated, setDarkModeActivated] = useState(false);
  const [lightIcon, setLightIcon] = useState(true);

  useEffect(() => {
    const activeDarkMode = localStorage.getItem('mode');
    if (activeDarkMode) {
      setBackgroundColor("#333333");
      setTextColor('#FFF');
      setSpecialColor('#fdf5e6');
      setFooterColor('#444');
      setBoxShadow('#222222 2px 2px 2px 2px')
      setDarkModeActivated(true);
      setLightIcon(false);
    }
  },[])

  function activateDarkMode() {
    setBackgroundColor('#333333');
    setTextColor('#FFF');
    setSpecialColor('#fdf5e6');
    setFooterColor('#444');
    setBoxShadow('#222222 2px 2px 2px 2px')
    localStorage.setItem('mode', 'true');
    setDarkModeActivated(true);
    setLightIcon(false);
  }

  function deactivateDarkMode() {
    setBackgroundColor('#F5F5DC');
    setTextColor('#333');
    setSpecialColor('#444');
    setFooterColor('#E0E0E0');
    setBoxShadow('#E0E0E0 2px 2px 2px 2px');
    localStorage.removeItem('mode');
    setDarkModeActivated(false);
    setLightIcon(true);
  }

  function toggleDarkMode() {
    if (darkModeActivated) {
      deactivateDarkMode();
    } else {
      activateDarkMode();
    }
  }

  return (
    <div className='root' style={{
      backgroundColor: backgroundColor,
      color: textColor
    }}>
      <Header
        color={textColor}
        colorBackground={backgroundColor}
        onClick={toggleDarkMode}
        lightIcon={lightIcon} />
      <PrincipalComponent
        color={specialColor}
        backgroundColor={backgroundColor}
        boxShadow={boxShadow} />
      <Footer footerColor={footerColor} />
    </div>
  );
}

export default App;
