import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    userId: 0,
    username: '',
  },
  reducers: {
    connectUser: (state, action) => {
      state.isLoggedIn = true;
    },
    disconnectUser: (state, action) => {
      state.isLoggedIn = false;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setUsername: (state, action) => {
      console.log('3333333333333');
      console.log(action.payload);
      state.username = action.payload;
    },
  },
});

const {reducer, actions} = slice;

export {reducer, actions};
