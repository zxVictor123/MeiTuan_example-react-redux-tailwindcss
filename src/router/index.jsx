import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import OrderFood from "../page/OrderFood";
import Evaluation from "../page/Evaluation";
import Merchant from "../page/Merchant";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Layout/>,
            children:[
                {
                    index: true,
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
        }
    ]
)
export default router