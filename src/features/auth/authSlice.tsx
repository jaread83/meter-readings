import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user: {
    accountId: string;
    userName: string;
    firstName: string;
    lastName: string;
  } | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

// Load the initial state from local storage if it exists
const persistedAuth = localStorage.getItem('authState');
if (persistedAuth) {
  initialState.isAuthenticated = JSON.parse(persistedAuth).isAuthenticated;
  initialState.user = JSON.parse(persistedAuth).user;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<AuthState['user']>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      // Save the authenticated state to local storage
      localStorage.setItem('authState', JSON.stringify(state));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      // Clear the authenticated state from local storage
      localStorage.removeItem('authState');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;