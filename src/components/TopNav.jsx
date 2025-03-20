import SearchBox from "./SearchBox"
import { useNavigate } from "react-router-dom"
import OrderFood from "../page/OrderFood"
import Evaluation from "../page/Evaluation"
import Merchant from "../page/Merchant"

const TopNav = () => {
    const navigate = useNavigate()
    return (
        <div className="flex bg-gray-100 justify-between h-12 items-center">
            <div>
                <button onClick={() => navigate('/')} className="mx-1">点菜</button>
                <button onClick={() => navigate('/Evaluation')} className="mx-1 px-1 border-x-1">评价</button>
                <button onClick={() => navigate('/Merchant')} className="mx-1">商家</button>
            </div>
                <SearchBox/>
        </div>
    )
}
export default TopNav