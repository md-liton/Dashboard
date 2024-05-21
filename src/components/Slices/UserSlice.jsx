import { createSlice } from '@reduxjs/toolkit'


export const userInformation = createSlice({
  name: 'users',
  initialState:{
    value:null
  },
  reducers: {
    login: (state,action) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { login } = userInformation.actions

export default userInformation.reducer