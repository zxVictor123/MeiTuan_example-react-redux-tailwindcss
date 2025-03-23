const FoodsCard = (props) => {
    const {foods} = props
    const {picture,id,name,like_ratio_desc,month_saled,unit,food_tag_list,price,description} = foods
    return (
        // 卡片整体包裹，将卡片分割成左右两块
    <div id = {id} className="pl-2 pb-2 mb-2 flex bg-white w-full h-28 sm:h-28 md:h-32 lg:h-36">
        {/* 左侧图片 */}
        <img  src = {picture} className=" rounded-lg aspect-square h-full"></img>
        {/* 右侧区域分为上中下三区域 */}
        <div className="h-full text-xs p-1 sm:text-xs md:text-xs lg:text-sm w-full">
            {/* 上 */}
            <div className="flex flex-col justify-center h-3/5 ">
                <h1 className="text-sm sm:text-sm md:text-xl lg:text-2xl font-black">{name}</h1>
                <div className="flex">
                    <span className="bg-gray-100 font-black whitespace-nowrap">{unit}</span>
                    <div className="overflow-hidden whitespace-nowrap text-ellipsis">{description}</div>
                </div>
                <div className="">
                    <span className="bg-amber-100 text-orange-600">{food_tag_list}</span>
                </div>
            </div>
            {/* 中 */}
            <div className="flex h-1/5 items-center">
                <div className="">{`月售${month_saled}份`}</div>
                <div className="">{like_ratio_desc}</div>
            </div>
            {/* 下 */}
            <div className="flex h-1/5 justify-between items-center">
                <h2 className="text-sm sm:text-sm md:text-xl lg:text-2xl font-black">{`￥${price}`}</h2>
                <button class="bg-yellow-500 text-black w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 px-2 py-1  rounded-full font-semibold shadow-md hover:bg-yellow-600 transition-colors flex items-center justify-center">
                    <span class="text-lg md:text-xl lg:text-2xl">+</span>
                </button>
            </div>
        </div>
    </div>
        )
}
export default FoodsCard