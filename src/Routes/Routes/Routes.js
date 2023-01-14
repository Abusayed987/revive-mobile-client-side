import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import MainLayout from "../../Layout/Main/MainLayout";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import MyWishList from "../../Pages/Dashboard/MyWishList/MyWishList";
import AllAdvertiseItems from "../../Pages/Home/AdvertiseItem/AllAdvertisedItems";
import CategoryItems from "../../Pages/Home/Categories/CategoryItems/CategoryItems";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/categories/:id',
                element: <PrivateRoute><CategoryItems></CategoryItems></PrivateRoute>,
            },
            {
                path: "/allAds",
                element: <AllAdvertiseItems></AllAdvertiseItems>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path: "/dashboard/myOrders",
                element: <MyOrders></MyOrders>
            },
            {
                path: "/dashboard/myWishlist",
                element: <MyWishList></MyWishList>
            },
            {
                path: "/dashboard/myProducts",
                element: <MyProducts></MyProducts>
            },
            {
                path: "/dashboard/addProducts",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/dashboard/allBuyers",
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: "/dashboard/AllSellers",
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
        ]
    }
])
export default router