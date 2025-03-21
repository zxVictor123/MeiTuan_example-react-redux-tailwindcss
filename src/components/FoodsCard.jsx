const FoodsCard = () => {
    return (
        // 卡片整体包裹，将卡片分割成左右两块
    <div className="pl-2 flex bg-green-500 w-full h-24 sm:h-24 md:h-28 lg:h-36">
        {/* 左侧图片 */}
        <img className=" bg-amber-50 rounded-lg aspect-square h-full"></img>
        {/* 右侧区域 */}
        <div className="">
            {/* 分为上下区域，上方包含 */}
            <div className="">

            </div>
        </div>
    </div>
        )
}
export default FoodsCard