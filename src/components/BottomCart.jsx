import { useSelector,useDispatch} from "react-redux"
import { clearCartList,switchIsCartListDisplay,addFoodsObjectCount,subtractFoodsObjectCount,setIsCartListDisplay } from "../store/Modules/foodsSlice"
import { useEffect } from "react"
const BottomCart = () => {
    const {cartList,isCartListDisplay} = useSelector((state) => state.foods)
    // 计算总数量和总价格
    const totalCount = cartList.length > 0 ? (cartList.map((foodsObject) => foodsObject.count).reduce((accumulator,currentValue) => accumulator + currentValue,0)):0
    const totalPrice = cartList.length > 0 ? (cartList.map((foodsObject) => foodsObject.price * foodsObject.count).reduce((accumulator,currentValue) => accumulator + currentValue,0)):0
    const dispatch = useDispatch()
    useEffect(() => {if (cartList.length == 0) {dispatch(setIsCartListDisplay())} },[cartList,dispatch])
    return (
    // 购物车总体外层包裹分为 “上方展开区” 和 “底部购物栏”
    <div className="flex flex-col justify-between rounded-md">
        {/*上方展开区，分为上中下三块 */}
        <div className = {`flex flex-col flex-1 ${isCartListDisplay > 0 ? "" : "hidden"}`}>
            {/* 上：遮罩层内包删除栏，判断点击的元素是否为遮罩层本身而非子元素，如果是的话，才允许触发绑定事件 */}
            <div onClick={(e) => {if (e.target === e.currentTarget) {dispatch(switchIsCartListDisplay())}}} className="flex flex-col justify-end h-1000000 bg-black/50">
                <button className="flex items-center justify-end bg-orange-100 h-6 pr-2 rounded-t-md"><span onClick={() => dispatch(switchIsCartListDisplay())} className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 hover:text-black hover:scale-105">x</span></button>
            </div>
            {/* 中：购物车以及清空购物车 */}
            <div className="flex justify-between bg-white items-center border-b-1 py-2 text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-4 md:px-6 lg:px-8">
                <div className="font-black text-base sm:text-lg md:text-xl lg:text-2xl">购物车</div>
                <button onClick={() => {dispatch(clearCartList()) ; dispatch(switchIsCartListDisplay())}} className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 pb-1 hover:text-black transition">清空购物车</button>
            </div>
            {/* 下：列表区 */}
            <div className="max-h-80 overflow-auto">                 
                {/* 遍历购物车列表渲染列表项 */}
                {cartList.map((foodsObject) =>
                <div className="flex py-2 px-2 sm:px-4 md:px-6 lg:px-8 bg-white">
                    {/* 左侧图片 */}
                    <img src = {foodsObject.picture} className="rounded-xl aspect-square h-16 sm:h-20 md:h-24 lg:h-28"></img>
                    {/* 右侧区域 */}
                    <div className="flex flex-col justify-between flex-1 w-1">
                        {/* 上：名称*/}
                        <div className="text-base sm:text-lg md:text-xl lg:text-3xl font-black">{foodsObject.name}</div>
                        {/* 下:价格和数量及加减按钮 */}
                        <div className="flex justify-between">
                            <div className="text-red-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">{`￥${(foodsObject.price * foodsObject.count).toFixed(2)}`}</div>
                            <div className="flex items-center">
                                <button onClick = {() => dispatch(subtractFoodsObjectCount(foodsObject.id))} className="text-3xl aspect-square rounded-sm h-5 sm:h-6 md:h-7 lg:h-8 border-1 border-amber-300 flex justify-center items-center hover:scale-105 hover:shadow-2xl hover:border-amber-400  active:scale-95">-</button>
                                <div className="px-1 text-base sm:text-lg md:text-xl lg:text-lg">{foodsObject.count}</div>
                                <button onClick = {() => dispatch(addFoodsObjectCount(foodsObject.id))} className="text-xl aspect-square rounded-sm h-5 sm:h-6 md:h-7 lg:h-8 bg-amber-300 flex justify-center items-center hover:scale-105 hover:shadow-2xl hover:bg-amber-400  active:scale-95">+</button>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
            
        </div>
        {/* 底部购物栏，分为左右两块 */}
        <div onClick={() => {if (totalCount > 0) dispatch(switchIsCartListDisplay())}} className="flex  border-1 text-white bg-black rounded-full h-18 sm:h-20 lg:h-24 overflow-hidden justify-between">
            {/* 左：左右布局 */}
            <div className="pl-12 flex flex-1 w-1">
                    <div className="pt-4">
                        {/* 总数量 */}
                        <span className="bg-red-600 rounded-full">{totalCount}</span>
                    </div>
                    {/* 上下布局 */}
                    <div className=" flex-col  justify-center">
                        {/* 总价 */}
                        <div className="text-xl md:text-2xl lg:text-3xl pt-2">
                            {`￥${totalPrice.toFixed(2)}`}
                        </div>
                        <div className="text-gray-300 text-sm md:text-base lg:text-lg">
                            预估另需配送费￥5
                        </div>
                    </div>
            </div>
            {/* 右: 嵌套三元判定“初始，差钱，结算”三种状态*/}
            {
                totalPrice > 0
                    ? (
                        totalPrice > 20 || totalPrice == 20 
                        ? <div className="w-20 sm:w-24 md:w-28 lg:w-36 flex items-center justify-center text-base md:text-lg lg:text-2xl bg-amber-300 text-black font-semibold">
                            去结算
                          </div> 
                        : <div className="w-24 sm:w-28 md:w-32 lg:w-40 flex items-center justify-center text-base md:text-lg lg:text-2xl text-black bg-amber-200 font-bold">
                            {`差￥${20-totalPrice}元起送`}
                          </div> 
                      )
                    : <div className="w-20 sm:w-24 md:w-28 lg:w-36 flex items-center justify-center text-base md:text-lg lg:text-2xl">
                        ￥20起送
                      </div>
             }
        </div>
    </div>

   
    )
}
export default BottomCart