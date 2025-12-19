import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./src/layout/MainLayout.jsx";
import Home from "./src/pages/home/Home.jsx";
import Cart from "./src/pages/cart/Cart.jsx"
import AuthLAyout from "./src/layout/AuthLAyout.jsx";
import Login from "./src/pages/login/Login.jsx";
import Register from "./src/pages/register/Register.jsx";
import SendCode from "./src/pages/sendCode/SendCode.jsx";
import ResetPassword from "./src/pages/resetPassword/ResetPassword.jsx";
import UserContextProvider, { UserContext } from "./src/context/UserContext.jsx";


const Router = createBrowserRouter([
  {
    path: "/",
    element: 
    <UserContextProvider>
    <MainLayout />
    </UserContextProvider> ,
    children:[
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/cart",
        element:
        
          <Cart />
      },
      {
       path: "login",
       element: <Login />
      },
      {
       path: "register",
       element: <Register />
      },
      {
       path: "sendCode",
       element: <SendCode />
      },
      {
       path: "resetPassword",
       element: <ResetPassword />
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

export default Router;