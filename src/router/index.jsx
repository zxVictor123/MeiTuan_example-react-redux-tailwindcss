import { createBrowserRouter } from "react-router-dom";
import OrderFood from "../page/OrderFood";
import Evaluation from "../page/Evaluation";
import Merchant from "../page/Merchant";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:'我是登录页'
        },
        {
            path:'/OrderFood',
            element: <OrderFood />
        },
        {
            path:'/Evaluation',
            element: <Evaluation />
        },
        {
            path:'/Merchant',
            element: <Merchant />
        }
    ]
)
export default router