import { createBrowserRouter } from "react-router-dom";
import OrderFoods from "../page/OrderFoods";
import Evaluation from "../page/Evaluation";
import Merchant from "../page/Merchant";
import App from "../App";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<App/>,
            children:[
                {
                    index: true,
                    element: <OrderFoods />
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