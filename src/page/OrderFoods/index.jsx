// page/OrderFood/index.jsx
import React,{useRef,useEffect} from 'react';
import CategorizatonItem from '../../components/CategorizationItem';
import FoodsCard from '../../components/FoodsCard';
import BottomCart from '../../components/BottomCart';
import { useSelector,useDispatch} from 'react-redux';
import loading from '../../assets/loading.gif'
import { changeActiveTag } from '../../store/Modules/foodsSlice';

const OrderFoods = () => {
  const dispatch = useDispatch()
  // 从store中获取foodsList数组
  const {foodsList} = useSelector((state)=>state.foods)
  // 初始化activeTag
  useEffect(() => {
    if (foodsList.length > 0) {
      dispatch(changeActiveTag(foodsList[0].tag));
    }
  }, [dispatch, foodsList]);
  // 创建操作不同食品分区的ref，并完成点击定位动作
  const categoryRef = useRef(null)
  const {activeTag} = useSelector((state) => state.foods)
  useEffect(() => {
    if (categoryRef.current) {
      categoryRef.current.scrollIntoView({behavior:'smooth'});
    }
  }, [activeTag]);
  // 创建操作不同食物对象的ref，并完成点击定位动作
  const foodsObjectRef = useRef(null)
  const {activeFoodsObjectId} = useSelector((state) => state.foods)
  useEffect (() => {
    if (foodsObjectRef.current) {
      foodsObjectRef.current.scrollIntoView({behavior:'smooth'})
    }
  },[activeFoodsObjectId])
  return (
    // 外层包裹中下两部分
    <div className='flex h-9/10 flex-col relative '>
      {/* 中层部分，包括左侧边栏区和右侧食品卡片区 */}
        <div className='flex flex-row h-full '>
            {/* 渲染分类项的区域 */}
            <div className=' w-1/4  bg-gray-200 flex flex-col items-center mr-2 overflow-auto'>
                {
                //遍历foodsList以获取分类项
                foodsList.length > 0 ? (foodsList.map((category)=>
                <CategorizatonItem key = {category.tag} tag = {category.tag} name = {category.name}/>)
                ) : <div className='flex justify-center items-center h-full'>
                         <img src={loading}></img>
                     </div>
              }
            </div>
            {/* 渲染商品卡片的区域 */}
            <div  className='bg-white w-3/4 overflow-auto'>
                {
                  foodsList.length > 0 
                  ? (
                    foodsList.map((category) => 
                    // 遍历foodsList数组，得到分类项并渲染出此分类的整块区域
                    <div ref = {(el) => {if(activeTag===category.tag) {categoryRef.current = el}}} key = {category.tag} tag = {category.tag} className='flex flex-col'>
                        <div className='py-1 pl-6 font-black text-xs sm:text-sm md:text-base lg:text-lg '>{category.name}</div>
                        <div>
                            {
                              category.foods.map((foodsObject) =>
                              // 遍历此类别的foods数组，得到每一个foods对象并渲染进此分类的整块区域
                              <FoodsCard ref = {(el) => {if (activeFoodsObjectId === foodsObject.id) foodsObjectRef.current = el}} key = {foodsObject.id} foodsObject = {foodsObject}/>)
                              }
                        </div>
                    </div>) 
                  ) 
                  // 加载图
                  : <div className='flex justify-center items-center h-full'>
                        <img src={loading}></img>
                    </div>
                }
                {/* 底部空白 */}
                <div className='flex justify-center items-center h-105 md:h-115 lg:h-125'>已经到底了~</div>
            </div>
            
        </div>
        {/* 底部购物车 */}
        <div className='fixed inset-x-0 bottom-0 z-2'>
            <BottomCart />
        </div>
    </div>
  );
};

export default OrderFoods;