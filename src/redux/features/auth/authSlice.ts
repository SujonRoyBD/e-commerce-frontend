import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: string;
  name: string;
  email: string;
  role: "customer" | "seller";
  phone?: string;
  avatar?: string;
  farmName?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
}

// Initial state with local storage fallback if client-side
const getInitialState = (): AuthState => {
  if (typeof window !== "undefined") {
    try {
      const storedUser = localStorage.getItem("tablefresh_user");
      const storedToken = localStorage.getItem("tablefresh_token");
      if (storedUser) {
        return {
          user: JSON.parse(storedUser),
          isAuthenticated: true,
          token: storedToken || "demo-jwt-token",
        };
      }
    } catch {
      // ignore JSON parse error
    }
  }
  return {
    user: null,
    isAuthenticated: false,
    token: null,
  };
};

const initialState: AuthState = getInitialState();

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ user: User; token?: string }>
    ) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.token = action.payload.token || "demo-jwt-token";

      if (typeof window !== "undefined") {
        localStorage.setItem("tablefresh_user", JSON.stringify(action.payload.user));
        localStorage.setItem("tablefresh_token", state.token);
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;

      if (typeof window !== "undefined") {
        localStorage.removeItem("tablefresh_user");
        localStorage.removeItem("tablefresh_token");
      }
    },
    register: (
      state,
      action: PayloadAction<{ user: User; token?: string }>
    ) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.token = action.payload.token || "demo-jwt-token";

      if (typeof window !== "undefined") {
        localStorage.setItem("tablefresh_user", JSON.stringify(action.payload.user));
        localStorage.setItem("tablefresh_token", state.token);
      }
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        if (typeof window !== "undefined") {
          localStorage.setItem("tablefresh_user", JSON.stringify(state.user));
        }
      }
    },
  },
});

export const { login, logout, register, updateUser } = authSlice.actions;
export const authReducer = authSlice.reducer;

