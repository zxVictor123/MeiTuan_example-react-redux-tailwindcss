// page/OrderFood/index.jsx
import React from 'react';
import TopNav from '../../components/TopNav';
import LeftSideBar from '../../components/LeftSideBar';
import RightContent from '../../components/RightContent';
import BottomCart from '../../components/BottomCart';
import SearchBox from '../../components/SearchBox';

const OrderFood = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* 顶部导航（包含搜索框） */}
      <div className="h-12 bg-gray-100 flex items-center
                     px-2.5 border-b border-gray-300">
        <h1 className="text-lg">点菜</h1>
        <div className="flex-1" />
        <SearchBox />
      </div>

      {/* 中间内容区域：左侧边栏 + 右侧内容 */}
      <div className="flex flex-1 overflow-hidden">
        {/* 左侧边栏 */}
        <div className="w-24 border-r border-gray-300 overflow-y-auto">
          <LeftSideBar />
        </div>

        {/* 右侧内容 */}
        <div className="flex-1 overflow-y-auto p-2.5">
          <RightContent />
        </div>
      </div>

      {/* 底部购物车 */}
      <BottomCart />
    </div>
  );
};

export default OrderFood;