import { createSlice } from '@reduxjs/toolkit';
import { getRandomText } from '../../utils/randomText';

const initialState = {
  text: getRandomText(),
  currentIndex: 0,
  timeLeft: 60, // Adjusted time
  isStarted: false,
  typedChars: '',
  wpm: 0,
  accuracy: 100,
  isSubmitted: false,
};

export const typingPaste = createSlice({
  name: 'typingTest',
  initialState,
  reducers: {
    startTest: (state) => {
      state.isStarted = true;
      state.isSubmitted = false;
    },
    updateTypedChars: (state, action) => {
      state.typedChars = action.payload;
      state.currentIndex = action.payload.length;
    },
    updateTimeLeft: (state, action) => {
      state.timeLeft = action.payload;
      if (state.timeLeft === 0) {
        state.isStarted = false;
        state.isSubmitted = true;
        state.currentIndex = state.typedChars.length;
        typingPaste.caseReducers.calculateWpm(state);
        typingPaste.caseReducers.calculateAccuracy(state);
      }
    },
    calculateWpm: (state) => {
      const wordsTyped = state.typedChars.trim().split(/\s+/).length;
      const timeElapsed = 60 - state.timeLeft; // Changed from 60 to match the initial timeLeft
      state.wpm = timeElapsed > 0 ? Math.round((wordsTyped / timeElapsed) * 60) : 0;
    },
    calculateAccuracy: (state) => {
      if (state.typedChars.length === 0) {
        state.accuracy = 0;
        return;
      }
      const correctChars = state.text.split('').filter((char, index) => char === state.typedChars[index]).length;
      const totalChars = state.typedChars.length;
      state.accuracy = totalChars ? Math.round((correctChars / totalChars) * 100) : 100;
    },
    submitTest: (state) => {
      state.isStarted = false; // End the test
      state.isSubmitted = true; // Mark the test as submitted
      typingPaste.caseReducers.calculateWpm(state); // Calculate WPM
      typingPaste.caseReducers.calculateAccuracy(state); // Calculate Accuracy
    },
    resetTest: (state) => {
      state.text = getRandomText();
      state.currentIndex = 0;
      state.timeLeft = 60; // Reset to 10
      state.isStarted = false;
      state.typedChars = '';
      state.wpm = 0;
      state.accuracy = 100;
      state.isSubmitted = false;
    },
  },
});

export const {
  startTest,
  updateTypedChars,
  updateTimeLeft,
  calculateWpm,
  calculateAccuracy,
  submitTest,
  resetTest,
} = typingPaste.actions;

export default typingPaste.reducer;
