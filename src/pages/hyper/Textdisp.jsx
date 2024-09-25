import React from 'react';

const Textdisp = ({ text, currentIndex, darkMode }) => {
  return (
    <div
      className={`text-display ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={index < currentIndex ? 'correct' : ''}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default Textdisp;
