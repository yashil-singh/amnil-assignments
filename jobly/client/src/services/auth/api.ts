import { LoginPayload, SignupPayload, User } from "@/lib/slices/auth/types";
import { POST } from "../api";

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

export const logout = async () => {
  await POST("/logout");
};
