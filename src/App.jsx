import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Dfooter from './components/Dfooter';

function App() {


  const [darkMode, setDarkMode] = useState(() => {

    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false; 
  });

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (darkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`max-w-screen-2xl mx-auto md:px-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={darkMode} />
      <div className="min-h-[calc(100vh-800px)]">
        <Outlet context={{ darkMode }} />
      </div>
      <Dfooter isDarkMode={darkMode} />
    </div>
  );
}

export default App;
