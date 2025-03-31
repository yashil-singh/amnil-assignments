import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout Imports
import RootLayout from "./components/layouts/RootLayout";
import AuthLayout from "./components/layouts/AuthLayout";

// Page Imports
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Home from "./components/pages/Home";
import Categories from "./components/pages/Categories";
import NotFound from "./components/pages/NotFound";
import { Flip, ToastContainer } from "react-toastify";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  // Creating Router
  const router = createBrowserRouter([
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
    {
      element: <RootLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/categories",
          element: <Categories />,
        },
      ],
    },
  ]);

  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router} />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          pauseOnFocusLoss={false}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          theme="colored"
          transition={Flip}
        />
      </AuthContextProvider>
    </>
  );
}

export default App;
