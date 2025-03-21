// page/OrderFood/index.jsx
import React from 'react';
import TopNav from '../../components/TopNav';
import LeftSideBar from '../../components/LeftSideBar';
import FoodsCard from '../../components/FoodsCard';
import BottomCart from '../../components/BottomCart';

const OrderFoods = () => {

  return (
    // 外层包裹中下两部分
    <div className='flex h-full flex-col relative'>
      {/* 中层部分，包括左侧边栏和右侧食品卡片区 */}
        <div className='flex flex-row h-full '>
            <LeftSideBar/>
            {/* 渲染商品卡片的区域 */}
            <div className='bg-blue-100 w-5/6'>
                <FoodsCard/>
            </div>
            
        </div>
        {/* 底部购物车 */}
        <div className='fixed inset-x-0 z-10 bottom-0'>
            <BottomCart/>
        </div>
    </div>
  );
};

export default OrderFoods;