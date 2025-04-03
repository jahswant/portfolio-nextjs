import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  username: string;
  email: string;
}

interface AuthState {
  user: User | null;
  registeredUsers: User[];
}

const initialState: AuthState = {
  user: null,
  registeredUsers: [
    { username: "sophie_dev", email: "sophie.tremblay@example.com" },
    { username: "lucas_b", email: "lucas.bernard@example.com" },
    { username: "fatimacode", email: "fatima.diallo@example.com" },
    { username: "dnkem2025", email: "david.nkem@example.com" },
    { username: "marie_lf", email: "marie.lefebvre@example.com" },
  ],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action: PayloadAction<User>) => {
      const exists = state.registeredUsers.some(u => u.email === action.payload.email);
      if (!exists) {
        state.registeredUsers.push(action.payload);
      }
    },
    login: (state, action: PayloadAction<{ email: string }>) => {
      const user = state.registeredUsers.find(u => u.email === action.payload.email);
      if (user) state.user = user;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
