import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Index } from "./components/pages/index";
import { Login } from "./components/pages/login";
import { Register } from "./components/pages/register";
import { Layout } from "./components/Layout/appLayout";
import { Home } from "./components/pages/home";
import { registerData, loginData, verify } from "./api/collectData";
// import { postTransaction } from "./api/transactionApi";
import { postTransaction } from "./api/transactionApi";
import { AuthdataProvider } from "./api/transactionContext";
// import { LocalProvider } from "./api/localProvider";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      loader: verify,
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "index",
          element: <Index />,
          loader: verify,
          action: postTransaction,
        },

        {
          path: "login",
          element: <Login />,
          loader: verify,
          action: loginData,
        },

        {
          path: "register",
          element: <Register />,
          loader: verify,
          action: registerData,
        },
      ],
    },
  ]);

  return (
    <>
      {/* <AuthdataProvider> */}
        <RouterProvider router={router} />
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
      {/* </AuthdataProvider> */}
    </>
  );
};

export default App;
