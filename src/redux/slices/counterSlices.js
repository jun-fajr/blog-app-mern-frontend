import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
//CREATE THE ACTION
export const fetchPost = createAsyncThunk('post/list', async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return data
    } catch (error) {
        return error?.response
    }
})

//SLICES

const postSlices = createSlice({
    name: 'post',
    initialState: {},
    extraReducers: {
        //Handling pending state
        [fetchPost.pending]: (state, action) => {
            state.loading = true
        },
        //Handling fulfilled
        [fetchPost.fulfilled]: (state, action) => {
            state.postsList = action.payload
            state.loading = false
        },
        //Handling rejection
        [fetchPost.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export default postSlices.reducer
