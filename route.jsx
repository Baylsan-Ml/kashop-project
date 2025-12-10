import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./src/layout/MainLayout";
import Home from "./src/pages/home/Home";
import Cart from "./src/pages/cart/Cart"
import AuthLAyout from "./src/layout/AuthLAyout";
import Login from "./src/pages/login/Login.jsx";
import Register from "./src/pages/register/Register.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
       path: "login",
       element: <Login />
      },
      {
       path: "register",
       element: <Register />
      },
    ],
  },

  {
    path: "/auth",
    element:<AuthLAyout />,
    children:[
      
      
      
    ],
  }
]);

export default router;