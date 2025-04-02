import { useNavigate,useLocation } from "react-router-dom"
import { getSearchContent } from "../store/Modules/foodsSlice"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { changeActiveTag,changeActiveFoodsObjectId } from "../store/Modules/foodsSlice"

const TopNav = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const {foodsList,searchContent} = useSelector((state) => state.foods)
    // 构造一个简易防抖函数
    const debounce = (fn,t) => {
        let timer
        return function (...args) {
            if (timer) {
                clearTimeout(timer)
            }
            // fn外加匿名函数包裹的原因：首先fn调用时需要传参，就必须写括号，写了括号就代表立即调用了，所以用一个匿名函数包裹，等到计时结束再调用匿名函数进而调用它
            timer = setTimeout(function () {
                fn(...args)
            },t)
        }
    }
    const debounceGetSearchContent = debounce((value) => dispatch(getSearchContent(value)),300)
    const handleChangeActiveTag = (value) => dispatch(changeActiveTag(value))
    const handleChangeActiveFoodsObjectId = (value) => dispatch(changeActiveFoodsObjectId(value))

    return (
        <div className="flex bg-gray-100 justify-between h-1/10 items-center mb-2 relative">
            {/* 三个路由 */}
            <div className="w-2/3  text-base md:text-lg lg:text-2xl">
                <button className=" w-1/3"><span onClick={() => navigate('/')}>点菜</span></button>
                <button className=" px-1 w-1/3"><span onClick={() => navigate('/Evaluation')}>评价</span></button>
                <button className=" w-1/3"><span onClick={() => navigate('/Merchant')}>商家</span></button>
            </div>
            {/* 搜索框 */}
            <div className="w-1/3 flex justify-end pr-2">
                {
                    location.pathname === '/' && <input type="search" placeholder="请输入菜品名称" onChange = {(event) => debounceGetSearchContent(event.target.value)} 
                    className=" pl-6  border-1 text-gray-600 bg-gray-300 rounded-full w-32 sm:w-36 md:w-48 lg:w-64 h-6 md:h-8 lg:h-10 text-xs md:text-sm lg:text-md"></input>
                }
                <ul className="flex flex-col absolute  bg-gray-100 top-[100%] w-32 sm:w-36 md:w-48 lg:w-64 z-1">
                    {
                        foodsList.length > 0 && searchContent != '' 
                        ? foodsList.flatMap(
                            (category) => category.foods
                        ).filter(
                            (foodsObject) => foodsObject.name.includes(searchContent)
                        ).map(
                            (searchItem) => <li onClick = {() => {handleChangeActiveTag(searchItem.tag);handleChangeActiveFoodsObjectId(searchItem.id)}} className="hover:cursor-default hover:font-black hover:scale-102 active:scale-98 hover:bg-gray-300 py-1 md:py-2 pl-1 md:pl-2 text-xs md:text-sm lg:text-md text-gray-600">{searchItem.name}</li>
                        ) 
                        :<li></li>
                    }
                </ul>
            </div>
        </div>
    )
}
export default TopNav