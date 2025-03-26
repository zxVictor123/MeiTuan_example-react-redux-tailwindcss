import { useSelector } from "react-redux"

const BottomCart = () => {
    const {cartList} = useSelector((state) => state.foods)
    // 计算总数量和总价格
    const totalCount = cartList.length > 0 ? (cartList.map((foodsObject) => foodsObject.count).reduce((accumulator,currentValue) => accumulator + currentValue,0)):0
    const totalPrice = cartList.length > 0 ? (cartList.map((foodsObject) => foodsObject.price * foodsObject.count).reduce((accumulator,currentValue) => accumulator + currentValue,0)):0
    return (
    // 购物车总体外层包裹分为 “购物车展开区域” 和 “购物车底部统计结算区域”
    <div className="flex flex-col bg-white justify-between rounded-md">
        {/* 购物车展开区域 */}
        <div className="max-h-96 overflow-auto">
            {/* 顶部区*/}
            <div className="flex justify-between items-center border-b-1 py-2 text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-4 md:px-6 lg:px-8">
                <div className="font-black">购物车</div>
                <div className="text-gray-600 pb-1">清空购物车</div>
            </div>
            {/* 列表区 */}
            {/* 遍历购物车列表渲染列表项 */}
            {cartList.map((foodsObject) =>
            <div className="flex py-2 px-2 sm:px-4 md:px-6 lg:px-8">
                {/* 左侧图片 */}
                <img src = {foodsObject.picture} className="rounded-xl aspect-square h-16 sm:h-20 md:h-24 lg:h-28"></img>
                {/* 右侧区域 */}
                <div className="flex flex-col justify-between flex-1 w-1">
                    {/* 上*/}
                    <div className="text-base sm:text-lg md:text-xl lg:text-3xl font-black">{foodsObject.name}</div>
                    {/* 下 */}
                    <div className="flex justify-between">
                        <div className="text-red-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">{`￥${foodsObject.price.toFixed(2)}`}</div>
                        <div className="flex items-center">
                            <div><button className="text-3xl aspect-square rounded-sm h-5 sm:h-6 md:h-7 lg:h-8 border-1 border-amber-300 flex justify-center items-center">-</button></div>
                            <div className="px-1 text-base sm:text-lg md:text-xl lg:text-lg">{foodsObject.count}</div>
                            <div><button className="text-xl aspect-square rounded-sm h-5 sm:h-6 md:h-7 lg:h-8 bg-amber-300 flex justify-center items-center">+</button></div>
                        </div>
                    </div>
                </div>
            </div>
            )}
            
        </div>
        {/* 购物车底部统计结算区，分为左右两块 */}
        <div className="flex  border-1 text-white bg-black rounded-full h-18 sm:h-20 lg:h-24 ">
            {/* 左侧，左右布局 */}
            <div className="pl-12 flex w-2/3">
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
            {/* 右侧 */}
            <div className="w-1/3 flex items-center justify-end text-base md:text-lg lg:text-2xl">
                <div>
                    ￥20起送
                </div>
            </div>
        </div>
    </div>

   
    )
}
export default BottomCart