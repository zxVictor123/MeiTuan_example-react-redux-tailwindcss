import SearchBox from "./SearchBox"
import { useNavigate } from "react-router-dom"

const TopNav = () => {
    const navigate = useNavigate()
    return (
        <div className="flex bg-gray-100 justify-between h-1/10 items-center mb-2 sticky top-0 z-10">
            <div className="w-2/3  text-base md:text-lg lg:text-2xl py-2">
                <button className=" w-1/3"><span onClick={() => navigate('/')}>点菜</span></button>
                <button className=" px-1 w-1/3"><span onClick={() => navigate('/Evaluation')}>评价</span></button>
                <button className=" w-1/3"><span onClick={() => navigate('/Merchant')}>商家</span></button>
            </div>
            <div className="w-1/3 flex justify-end">
                <SearchBox/>
            </div>
        </div>
    )
}
export default TopNav