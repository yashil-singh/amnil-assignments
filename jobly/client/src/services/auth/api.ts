import { LoginPayload, SignupPayload, User } from "@/lib/slices/auth/types";
import { GET, POST } from "../api";

export const login = async (
  data: LoginPayload,
): Promise<{ message: string; user: User }> => {
  const response = await POST("/login", data);
  return response;
};

export const signup = async (
  data: SignupPayload,
): Promise<{ message: string; user: User }> => {
  const response = await POST("/signup", data);
  return response;
};

export const logout = async (): Promise<{ message: "string" }> => {
  const response = await POST("/logout");
  return response;
};

export const fetchUser = async (): Promise<{ user: User }> => {
  const response = await GET("/auth/me");
  return response;
};
