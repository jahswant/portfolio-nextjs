import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  username: string;
  email: string;
  password: string;
}

interface AuthState {
  user: User | null;
  registeredUsers: User[];
}

const initialState: AuthState = {
  user: null,
  registeredUsers: [
    {
      username: "sophie_dev",
      email: "sophie.tremblay@example.com",
      password: "sophie123",
    },
    {
      username: "lucas_b",
      email: "lucas.bernard@example.com",
      password: "lucas123",
    },
    {
      username: "fatimacode",
      email: "fatima.diallo@example.com",
      password: "fatima123",
    },
    {
      username: "dnkem2025",
      email: "david.nkem@example.com",
      password: "david123",
    },
    {
      username: "marie_lf",
      email: "marie.lefebvre@example.com",
      password: "marie123",
    },
  ],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action: PayloadAction<User>) => {
      const exists = state.registeredUsers.some(
        (u) => u.email === action.payload.email
      );
      if (!exists) {
        state.registeredUsers.push(action.payload);
      }
    },
    login: (state, action: PayloadAction<{ email: string; password: string }>) => {
      const user = state.registeredUsers.find(
        (u) =>
          u.email.trim().toLowerCase() === action.payload.email.trim().toLowerCase() &&
          u.password === action.payload.password.trim()
      );
      if (user) {
        state.user = user;
      }
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
