import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./src/layout/MainLayout.jsx";
import Home from "./src/pages/home/Home.jsx";
import Cart from "./src/pages/cart/Cart.jsx"
import AuthLAyout from "./src/layout/AuthLAyout.jsx";
import Login from "./src/pages/login/Login.jsx";
import Register from "./src/pages/register/Register.jsx";
import SendCode from "./src/pages/sendCode/SendCode.jsx";
import ResetPassword from "./src/pages/resetPassword/ResetPassword.jsx";
import ProductDetails from "./src/components/products/ProductDetails.jsx";
import Products from "./src/components/products/Products.jsx";
import Categories from "./src/components/categories/Categories.jsx";
import ProtectedRouter from "./src/ProtectedRouter.jsx";
import { Container } from "@mui/material";
import Sales from "./src/components/sales/Sales.jsx";
import Hero from "./src/components/hero/Hero.jsx";


const Router = createBrowserRouter([
  {
    path: "/",
    element: 
      <MainLayout />,
    
    children:[
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/cart",
        element:
        <ProtectedRouter>
          <Cart />
        </ProtectedRouter>  
      },
      {
        path:'/hero',
        element:
        <Hero />
      },
      {
        path:"/category",
        element:
        <Categories />
      },
      {
        path:'/products',
        element:
        <Products />
      },
      {
        path:'/sales',
        element: 
        <Sales />
      },
      {
        path: "/productDetails/:id",
        element:
        <ProductDetails />
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