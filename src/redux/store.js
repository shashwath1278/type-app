import { configureStore } from '@reduxjs/toolkit'
import typingTestReducer from './features/typingPaste'

export default configureStore({
  reducer: {
    typingTest:typingTestReducer
  },
})