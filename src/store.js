import { configureStore } from '@reduxjs/toolkit'
import Reducer from './todoSlice'

export default configureStore({
  reducer: 
  {
    post:Reducer
  }
  
});
