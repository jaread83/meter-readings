import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface User {
  accountId: number;
  userName: string;
  firstName: string;
  lastName: string;
};

export interface UserSlice {
  user: User | undefined;
  isAuthenticated: boolean;
};

const initialState: UserSlice = {
  user: undefined,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: UserSlice, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearUser: (state: UserSlice) => {
      state.isAuthenticated = false;
    }
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export const isLoggedIn = (state: RootState) => !!state.user.user;

export default userSlice;