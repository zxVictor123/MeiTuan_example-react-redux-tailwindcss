import SearchBox from "./SearchBox"
import { useNavigate } from "react-router-dom"

const TopNav = () => {
    const navigate = useNavigate()
    return (
        <div className="flex bg-gray-100 justify-between h-12 md:h-16 items-center mb-2">
            <div className="w-2/3  text-md md:text-lg lg:text-2xl py-2">
                <button onClick={() => navigate('/')} className=" w-1/3">点菜</button>
                <button onClick={() => navigate('/Evaluation')} className=" px-1 w-1/3">评价</button>
                <button onClick={() => navigate('/Merchant')} className=" w-1/3">商家</button>
            </div>
            <div className="w-1/3 flex justify-end">
                <SearchBox/>
            </div>
        </div>
    )
}
export default TopNav