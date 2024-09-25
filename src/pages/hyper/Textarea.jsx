import React, { useState, useEffect } from 'react';

const Textarea = ({ onType, isDisabled, darkMode }) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    if (isDisabled) {
      setInput('');
    }
  }, [isDisabled]);

  const handleChange = (e) => {
    if (!isDisabled) {
      setInput(e.target.value);
      onType(e.target.value);
    }
  };

  return (
    <textarea
      className={`textar ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
      value={input}
      onChange={handleChange}
      disabled={isDisabled}
      rows="10"
      cols="50"
      placeholder="Type here.."
    />
  );
}

export default Textarea;
