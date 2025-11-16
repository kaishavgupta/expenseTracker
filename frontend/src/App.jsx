import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Index } from "./components";
import { Login } from "./components/pages/login";
import { Register } from "./components/pages/register";
import { Layout } from "./components/Layout/appLayout";
import { Home } from "./components/pages/home";
import { registerData,loginData, verify } from "./api/collectData";
// import { LocalProvider } from "./api/localProvider";

const App = () => {
  const router = createBrowserRouter([
    {
    path: "/",
    loader:verify,
    element: <Layout />,
    children: [
      {
         path: "/",
        element: <Home />
      },

      {
        path:"index",
        element:<Index/>
      },

      {
        path:"login",
        element:<Login/>,
        action:loginData
      },

      {
        path:"register",
        element:<Register/>,
        action:registerData
      },
    ],
  }
  ]);

  return (
    
      <RouterProvider router={router} />
    
  )
};

export default App;
