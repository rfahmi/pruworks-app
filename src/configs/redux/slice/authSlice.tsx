import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  isLogin: boolean;
}

const initialState: AuthState = {
  isLogin: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLogin(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
  },
});

export const {setIsLogin} = authSlice.actions;

export default authSlice.reducer;
