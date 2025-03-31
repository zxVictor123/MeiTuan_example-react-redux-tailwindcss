import { createBrowserRouter } from "react-router-dom";
import OrderFoods from "../page/OrderFoods";
import Evaluation from "../page/Evaluation";
import Merchant from "../page/Merchant";
import Shop1 from "../layout/Shop1";

import App from "../App";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<App/>,
            children:[
                {
                    path:'/',
                    element:<Shop1 />,
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
        },
    ]
)
export default router