import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import AuthLayout from "./layout/AuthLayout";
import Regiester from "./pages/Register/Regiester";
import Login from "./pages/Login/Login";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import UserContextProvider, { UserContext } from "./Context/UserContext";
import Shop from "./pages/Shop/Shop";
import ProductDetails from "./pages/ProductDetails/ProductDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element:
      <UserContextProvider><MainLayout /> </UserContextProvider>,
    children: [{ path: "/", element: <Home /> },
    { path: "/cart", element: <Cart /> },
    { path: "/shop", element: <Shop /> },
    { path: "/productDetails", element: <ProductDetails /> },
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [{
      path: "register",
      element: <Regiester />,
    },
    {
      path: "login",
      element: <Login />,

    },
    {
      path: "resetPassword",
      element: <ResetPassword />,

    },
    {
      path: "forgotPassword",
      element: <ForgotPassword />,

    },

    ]
  },
]);

export default router;