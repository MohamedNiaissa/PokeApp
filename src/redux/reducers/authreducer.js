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
      console.log('seeeeeeeeeeeeet');
      console.log(action.payload);
      state.profilePicture = action.payload;
    },
  },
});

const {reducer, actions} = slice;

export {reducer, actions};
