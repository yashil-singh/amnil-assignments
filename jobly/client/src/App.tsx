import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import Profile from "./components/pages/Profile";
import Settings from "./components/pages/Settings/Settings";
import JobDetails from "./components/pages/JobDetails";
import NotFound from "./components/pages/NotFound";
import Login from "./components/pages/Login";
import AuthLayout from "./components/layouts/AuthLayout";
import Signup from "./components/pages/Signup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppDispatch, RootState } from "./lib/store";
import Logo from "./components/ui/Logo";
import { setTheme } from "./lib/slices/theme/themeSlice";
import { fetchUser } from "./services/auth/api";
import { clearUser, setUser } from "./lib/slices/auth/authSlice";
import { getSavedJobs } from "./services/job/api";
import { setSaved } from "./lib/slices/saved/savedSlice";
import SavedJobs from "./components/pages/SavedJobs";
import SettingsLayout from "./components/layouts/SettingsLayout";
import EditProfile from "./components/pages/Settings/EditProfile";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const { user, loading } = useSelector((state: RootState) => state.auth);

  // useEffect for getting stored theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      dispatch(setTheme(savedTheme as "light" | "dark"));
    } else {
      dispatch(setTheme("dark"));
    }
  }, [dispatch]);

  // useEffect to authenticate user
  useEffect(() => {
    const authenticate = async () => {
      try {
        const response = await fetchUser();

        dispatch(setUser(response.user));
      } catch {
        dispatch(clearUser());
      }
    };

    authenticate();
  }, [dispatch]);

  // useEffect to get saved jobs
  useEffect(() => {
    const fetchSavedJobs = async () => {
      try {
        const response = await getSavedJobs();
        dispatch(setSaved(response));
      } catch (error) {
        console.log("🚀 ~ App.tsx:55 ~ error:", error);
      }
    };

    fetchSavedJobs();
  }, [dispatch, user]);

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
          element: <SettingsLayout />,
          children: [
            {
              index: true,
              element: <Settings />,
            },
            {
              path: "edit-profile",
              element: <EditProfile />,
            },
          ],
        },
        {
          path: "/saved-jobs",
          element: <SavedJobs />,
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
