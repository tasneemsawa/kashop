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
import CategoryProducts from "./pages/CategoryProducts/CategoryProducts";
import ProfileLayout from "./pages/Profile/ProfileLayout";
import ProfileInfo from "./pages/Profile/ProfileInfo/ProfileInfo";
import Orders from "./pages/Profile/Orders/Orders";
import Settings from "./pages/Profile/Settings/Settings";



const router = createBrowserRouter([
  {
    path: "/",
    element:
     <MainLayout />,
    children: [{  index: true, element: <Home /> },
    { path: "/cart", element:<ProtectedRouter> <Cart /></ProtectedRouter>  },
    { path: "/shop", element: <Shop /> },
    { path: "/productDetails/:id", element: <ProductDetails /> },
    { path: "/checkout", element:<ProtectedRouter><Checkout /></ProtectedRouter>  },
    { path: "/payment", element: <ProtectedRouter><Payment /></ProtectedRouter> },  
    { path: "/categoryProducts/:id/:name", element: <CategoryProducts /> },  
    { path: "/profile", element: <ProtectedRouter><ProfileLayout /></ProtectedRouter>,
    children: [
      {
        index: true,
        element: <ProfileInfo />
      },
      {
        path: 'orders',
        element: <Orders />
      },
      {
        path: 'settings',
        element: <Settings />
      }

      
    ]
  
  },  

    
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