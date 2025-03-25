import { useSelector } from "react-redux"

const BottomCart = () => {
    const {cartList} = useSelector((state) => state.foods)
    // 计算总数量和总价格
    const totalCount = cartList.length > 0 ? (cartList.map((foodsObject) => foodsObject.count).reduce((accumulator,currentValue) => accumulator + currentValue,0)):'0'
    const totalPrice = cartList.length > 0 ? (cartList.map((foodsObject) => foodsObject.price * foodsObject.count).reduce((accumulator,currentValue) => accumulator + currentValue,0)):'0'
    return (
    // 购物车外层包裹，分为左右两块
    <div className="flex  border-1 text-white bg-black rounded-full mx-4 sm:mx-6 md:mx-8 lg:mx-10  h-18 sm:h-20 lg:h-24 ">
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
                    ￥{totalPrice}
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
    )
}
export default BottomCart