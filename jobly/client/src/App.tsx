import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import Profile from "./components/pages/Profile";
import Settings from "./components/pages/Settings";
import JobDetails from "./components/pages/JobDetails";
import NotFound from "./components/pages/NotFound";
import Login from "./components/pages/Login";
import AuthLayout from "./components/layouts/AuthLayout";
import Signup from "./components/pages/Signup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUser } from "./lib/slices/auth/authSlice";
import { AppDispatch, RootState } from "./lib/store";
import Logo from "./components/ui/Logo";
import { setTheme } from "./lib/slices/theme/themeSlice";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  const loading = useSelector((state: RootState) => state.auth.loading);

  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      dispatch(setTheme(savedTheme === "dark"));
    } else {
      dispatch(setTheme(false));
    }

    setIsThemeLoaded(true);
  }, [dispatch]);

  useEffect(() => {
    if (isThemeLoaded) {
      const theme = isDarkMode ? "dark" : "light";

      if (isDarkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }

      localStorage.setItem("theme", theme);
    }
  }, [isDarkMode, isThemeLoaded]);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/job/:id",
          element: <JobDetails />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
      ],
    },
    {
      element: <AuthLayout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
      ],
    },
  ]);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Logo className="h-fit w-[200px] animate-pulse" />
      </div>
    );
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
