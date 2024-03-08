import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    userId: 0,
    username: '',
    profilePicture: 'https://picsum.photos/200/300',
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
      state.username = action.payload;
    },
    setProfilePicture: (state, action) => {
      state.profilePicture = action.payload;
    },
    clearData: (state, action) => {
      state.isLoggedIn = false;
      state.userId = 0;
      state.username = '';
      state.profilePicture = 'https://picsum.photos/200/300';
    },
  },
});

const {reducer, actions} = slice;

export {reducer, actions};
