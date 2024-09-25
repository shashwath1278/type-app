
import React from 'react';

const Speed = ({ wpm, accuracy }) => {
  return (
    <div className="speed-stats">
      <p>Words per minute: {wpm}</p>
      <p>Accuracy: {accuracy}%</p>
    </div>
  );
};

export default Speed;