import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Textdisp from './Textdisp';
import Textarea from './Textarea';
import Tum from './Tum';
import { Button } from 'flowbite-react';
import { resetTest, startTest, updateTimeLeft, updateTypedChars, submitTest } from '../../redux/features/typingPaste';
import Speed from './Speed';

const Typingapp = ({ darkMode }) => {
  const [showTum, setShowTum] = useState(false);
  const dispatch = useDispatch();
  const { text, currentIndex, isStarted, typedChars, timeLeft, wpm, accuracy, isSubmitted } = useSelector(
    (state) => state.typingTest
  );

  useEffect(() => {
    if (isStarted && timeLeft > 0) {
      const timer = setInterval(() => {
        dispatch(updateTimeLeft(timeLeft - 1));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isStarted, timeLeft, dispatch]);

  const handleType = (value) => {
    if (!isStarted) return;
    dispatch(updateTypedChars(value));
  };

  const handleStartTest = () => {
    dispatch(startTest());
    setShowTum(true);
  };

  const handleTimet = (newTimeLeft) => {
    dispatch(updateTimeLeft(newTimeLeft));
  };

  const handleSubmit = () => {
    dispatch(submitTest());
  };

  const handleReset = () => {
    dispatch(resetTest());
    setShowTum(false);
  };

  return (
    <div className={`end mt-8 space-y-4 px-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h1 className= {`flend text-2xl font-semibold mb-6 `}>Type the given lines to test!</h1>
      <Textdisp  text={text} currentIndex={currentIndex} darkMode={darkMode} />
      <Textarea onType={handleType} isDisabled={!isStarted || isSubmitted} darkMode={darkMode} />
      <div>
        <Button background-color="red" color="red" onClick={handleStartTest} disabled={isStarted || isSubmitted}>
          Click here to start test!
        </Button>
        <br />
        {showTum && <Tum timeLeft={timeLeft} onTimeUp={handleTimet} />}
      </div>

      {isSubmitted && <Speed wpm={wpm} accuracy={accuracy} />}

      <div className="flex gap-8">
        <Button onClick={handleSubmit} color="blue" disabled={!isStarted || isSubmitted}>
          Submit
        </Button>
        <Button onClick={handleReset} color="failure">
          Reset
        </Button>
       
      </div>
      <br/>
      <br/>
    </div>
  );
};

export default Typingapp;