import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../slices/counterSlices'
const store = configureStore({
    reducer: {
        post: postReducer
    }
})

export default store
