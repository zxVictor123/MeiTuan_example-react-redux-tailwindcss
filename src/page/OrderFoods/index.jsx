// page/OrderFood/index.jsx
import React from 'react';
import CategorizatonItem from '../../components/CategorizationItem';
import FoodsCard from '../../components/FoodsCard';
import BottomCart from '../../components/BottomCart';
import { useSelector } from 'react-redux';
const OrderFoods = () => {
  // 从store中获取foodsList数组
  const {foodsList} = useSelector((state)=>state.foods)
  // 将所有的foods中的对象整合进allFoods数组
  const allFoods = foodsList.flatMap((category) => category.foods)
  return (
    // 外层包裹中下两部分
    <div className='flex h-full flex-col relative'>
      {/* 中层部分，包括左侧边栏区和右侧食品卡片区 */}
        <div className='flex flex-row h-full '>
            {/* 渲染分类项的区域 */}
            <div className='w-1/4 bg-gray-200 flex flex-col items-center mr-2 overflow-auto'>
                {foodsList.length > 0 ? (foodsList.map((category)=>
                <CategorizatonItem key = {category.tag} tag = {category.tag} name = {category.name}/>
                )):<p>加载中</p>
              }
            </div>
            {/* 渲染商品卡片的区域 */}
            <div className='bg-white w-3/4 overflow-auto'>
                {
                  foodsList.length > 0 ? (allFoods.map((foods) => 
                  <FoodsCard key = {foods.id} foods = {foods}/>)
                ):<p>加载中</p>
                }
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