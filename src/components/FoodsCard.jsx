import { addCartList } from "../store/Modules/foodsSlice"
import { useDispatch,useSelector } from "react-redux"
import React from "react"
// 继承父组件传来的props和ref
const FoodsCard = React.forwardRef((props,ref) => {
    const dispatch = useDispatch()
    const {foodsObject} = props
    const {picture,id,name,like_ratio_desc,month_saled,unit,food_tag_list,price,description,tag,count} = foodsObject
    const {activeFoodsObjectId} = useSelector((state) => state.foods)
    return (
        // 卡片整体包裹，将卡片分割成左右两块
    <div id = {id} ref={ref} className = {`pl-2 pb-2 mb-2 flex rounded-md w-full h-30 sm:h-32 md:h-34 lg:h-36 ${activeFoodsObjectId === id ? 'bg-amber-200' :'bg-white'}`}>
        {/* 左侧图片 */}
        <img  src = {picture} className=" rounded-lg aspect-square h-full"></img>
        {/* 右侧区域分为上中下三区域 */}
        <div className="h-full text-xs p-1 sm:text-xs md:text-xs lg:text-sm flex-1 w-1">
            {/* 上：名字 分量 描述 推荐语*/}
            <div className="flex flex-col justify-center h-3/5 ">
                <h1 className="text-sm sm:text-sm md:text-xl lg:text-2xl font-black ">{name}</h1>
                <div className="flex">
                    <span className="bg-gray-100 font-black whitespace-nowrap">{unit}</span>
                    <div className="whitespace-nowrap overflow-hidden text-ellipsis">{description}</div>
                </div>
                <div className="">
                    <span className="bg-amber-100 text-orange-600">{food_tag_list}</span>
                </div>
            </div>
            {/* 中：月售 好评度 */}
            <div className="flex h-1/5 items-center">
                <div className="pr-2">{`月售${month_saled}份`}</div>
                <div className="">{like_ratio_desc}</div>
            </div>
            {/* 下：价格 按钮 */}
            <div className="flex h-1/5 justify-between items-center pr-4">
                <h2 className="text-sm sm:text-sm md:text-xl lg:text-2xl font-black">{`￥${price}`}</h2>
                <button onClick={() => dispatch(addCartList({picture,id,name,like_ratio_desc,month_saled,unit,food_tag_list,price,description,tag,count}))} className="bg-yellow-400 text-black text-lg md:text-xl lg:text-2xl font-black w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full  shadow-md hover:bg-yellow-600 hover:scale-105 active:scale-95  flex items-center justify-center">
                    +
                </button>
            </div>
        </div>
    </div>
        )
})
export default FoodsCard