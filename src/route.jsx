import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import AuthLayout from "./layout/AuthLayout";
import Regiester from "./pages/Register/Regiester";
import Login from "./pages/Login/Login";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Shop from "./pages/Shop/Shop";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Payment from "./pages/Payment/Payment";
import Checkout from "./pages/Checkout/Checkout";
import ProtectedRouter from "./ProtectedRouter";


const router = createBrowserRouter([
  {
    path: "/",
    element:
     <MainLayout />,
    children: [{ path: "/", element: <Home /> },
    { path: "/cart", element:<ProtectedRouter> <Cart /></ProtectedRouter>  },
    { path: "/shop", element: <Shop /> },
    { path: "/productDetails/:id", element: <ProductDetails /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/payment", element: <Payment /> },    
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