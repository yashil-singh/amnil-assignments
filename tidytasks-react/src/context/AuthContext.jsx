import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const setUserData = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setIsLoading(false);
    toast("Logged out.");
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);

    setIsLoading(false);
  }, []);

  if (isLoading)
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <span className="text-4xl animate-bounce">🧼</span>
      </div>
    );

  return (
    <AuthContext.Provider value={{ user, isLoading, setUserData, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
