import { configureStore } from '@reduxjs/toolkit';

import loggedInUserReducer from 'reduxSlice/loggedInUserSlice';

export default configureStore({
  reducer: {
    loggedInUser: loggedInUserReducer,
  },
});
