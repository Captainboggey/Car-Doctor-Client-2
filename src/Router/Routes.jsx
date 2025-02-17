import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CheckOut from "../Pages/CheckOut/CheckOut";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([{
    path:"/",
    element:<Main></Main>,
    children:[{
        path:"/",
        element:<Home></Home>,
        loader: ()=> fetch('http://localhost:5000/services')
    },{
        path:"/login",
        element:<Login></Login>
    },{
        path:"/register",
        element:<Register></Register>
    },{
        path: "/checkout/:id",
        element:<PrivateRouter><CheckOut></CheckOut></PrivateRouter>,
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
    }]
}])

export default router