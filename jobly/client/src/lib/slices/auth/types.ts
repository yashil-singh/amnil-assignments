export type User = {
  id: string;
  name: string;
  email: string;
};

export type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
};

export type SignupPayload = {
  name: string;
  email: string;
  password: string;
};
