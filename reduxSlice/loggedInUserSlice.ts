import { createSlice } from '@reduxjs/toolkit';

const loggedInUserInitialState: {
  loggedUser: {
    email: string;
    emailVerified: boolean;
    familyName: string;
    givenName: string;
    localLang: string;
    name: string;
    nickName: string;
    picture: string;
    sub: string;
    updatedAt: Date;
  };
} = {
  loggedUser: {
    email: 'dummyemail@gmail.com',
    emailVerified: false,
    familyName: 'dummyFamilyName',
    givenName: 'dummyGivenName',
    localLang: 'en',
    name: 'dummyName',
    nickName: 'dummyNickName',
    picture: 'dummyPictureUrl',
    sub: 'dummySubName',
    updatedAt: new Date(),
  },
};

export const loggedInUserSlice = createSlice({
  name: 'LoggedInUserSliceName',
  // 👇 count:count

  initialState: loggedInUserInitialState,
  reducers: {
    //! the ()=> takes "state" as parameter. the state has the initialState
    // setLoggedInUser: (state) => {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    //*  state.loggedInUser = "abc";
    // },

    //! the ()=> takes "state" as parameter. the state has the initialState
    setLoggedInUser: (state, action) => {
      state.loggedUser = action.payload;
      console.log(
        '🌍From LoggedInUserSlice',
        action.payload.email,
        action.payload.email_verified,
        action.payload.family_name,
        action.payload.given_name,
        action.payload.locale,
        action.payload.name,
        action.payload.nickname,
        action.payload.picture,
        action.payload.sub,
        action.payload.updated_at
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedInUser } = loggedInUserSlice.actions;

export default loggedInUserSlice.reducer;
//! we will import this default export as "counterReducer" instead of "counterSlice" or "counterSlice.reducer"
//! since this is a default export so , you can import with any name not only "counterReducer" but with any name
