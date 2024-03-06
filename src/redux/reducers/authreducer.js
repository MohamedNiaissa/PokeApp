import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    connectUser: (state, action) => {
      state.isLoggedIn = true;
    },
    disconnectUser: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

const {reducer, actions} = slice;

export {reducer, actions};
