import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {reducer as authreducer} from './redux/reducers/authreducer';

const rootReducers = combineReducers({
  auth: authreducer,
});

const store = configureStore({reducer: rootReducers});

export {store};
