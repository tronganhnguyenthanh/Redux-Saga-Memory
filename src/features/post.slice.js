import {createSlice} from "@reduxjs/toolkit"
const postSlice = createSlice({
  name:"post",
  initialState:{
   post:[]
  },
  reducers:{
   getListPost:(state, action) => {
    state.post = action.payload 
   }
  }
})
export const {getListPost} = postSlice.actions
const postReducer = postSlice.reducer
export default postReducer