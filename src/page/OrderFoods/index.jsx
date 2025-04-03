// page/OrderFood/index.jsx
import React,{useRef,useEffect} from 'react';
import CategorizatonItem from '../../components/CategorizationItem';
import FoodsCard from '../../components/FoodsCard';
import BottomCart from '../../components/BottomCart';
import { useSelector,useDispatch} from 'react-redux';
import loading from '../../assets/loading.gif'
import { changeActiveTag,switchIsClickCategory } from '../../store/Modules/foodsSlice';

const OrderFoods = () => {
  const dispatch = useDispatch()
  // 从store中获取状态
  const {foodsList,activeTag,isClickCategory} = useSelector((state)=>state.foods)

  // 初始化activeTag
  useEffect(() => {
    if (foodsList.length > 0) {
      dispatch(changeActiveTag(foodsList[0].tag));
    }
  }, [dispatch, foodsList]);

  //创建ref
  const foodsAreaRef = useRef(null) 
  const categoryItemRef = useRef({})
  const foodsPartitionRef = useRef({})
  const foodsObjectRef = useRef({})

// 点击分类项高光
  useEffect(() => {
    Object.values(categoryItemRef.current).forEach(
    (el) => el.classList.remove('font-black','bg-white'))
    const target = categoryItemRef.current[activeTag]
    if(target) {
      target.classList.add('font-black' ,'bg-white')
  }
},[activeTag])

// 点击分类项滚动到指定食品分区
  useEffect(() => {
    if (isClickCategory && foodsPartitionRef.current[activeTag]) {
      foodsPartitionRef.current[activeTag].scrollIntoView();
      dispatch(switchIsClickCategory())
    }
  }, [activeTag,isClickCategory,dispatch]);

  // 点击搜索项滑动到指定食品
  const {activeFoodsObjectId} = useSelector((state) => state.foods)
  useEffect (() => {
    if (foodsObjectRef.current[activeFoodsObjectId]) {
      foodsObjectRef.current[activeFoodsObjectId].scrollIntoView({behavior:'smooth',block:'center'})
    }
  },[activeFoodsObjectId])
  
  // 滚动食品分区高光分类项
  useEffect(
    () => {
      // 定义foodsPartitionObserver
      const foodsPartitionObserver = new IntersectionObserver (
        (entries) => {
          // 点击时不触发滚动高光
            if (isClickCategory) return;
            // 找到顶部最靠近root顶端的元素的tag
            let topmostTag = null;
            let minTop = Infinity;
            entries.forEach(
              (entry) => {
                const tag = entry.target.getAttribute("data-tag")
                const rect = entry.target.getBoundingClientRect()
                const rootRect = foodsAreaRef.current.getBoundingClientRect()
                // 计算观察元素相对于root顶的距离
                const topRelativeToRoot = rect.top - rootRect.top
    
                if(entry.isIntersecting && topRelativeToRoot < minTop) {
                  // 更新最小距离与最近的元素tag
                  minTop = topRelativeToRoot
                  topmostTag = tag
                }
              }
            )
            if(topmostTag && minTop <= 0 && topmostTag !== activeTag) {
              dispatch(changeActiveTag(topmostTag))
            }
        },{
          root: foodsAreaRef.current,
          rootMargin: '0px',
          threshold: [0,1]
        }
      )
      // 观察所有食品分区
      Object.values(foodsPartitionRef.current).forEach((target) => foodsPartitionObserver.observe(target))
      // 返回一个清理函数,下一次useEffect触发时会先调用这个函数
      return () => foodsPartitionObserver.disconnect()
    },[dispatch,activeTag,isClickCategory,foodsList]
  )


  return (
    // 外层包裹中下两部分
    <div className='flex h-9/10 flex-col relative '>
      {/* 中层部分，包括左侧分类项区和右侧食品卡片区 */}
        <div ref={foodsAreaRef} className='flex flex-row h-full'>
            {/* 渲染分类项的区域 */}
            <div className=' w-1/4  bg-gray-200 flex flex-col items-center mr-2 overflow-auto'>
                {
                //遍历foodsList以获取左侧分类项
                foodsList.length > 0 ? (foodsList.map((category)=>
                <CategorizatonItem key = {category.tag} tag = {category.tag} name = {category.name} ref = {(el) => categoryItemRef.current[category.tag] = el}/>)
                ) : <div className='flex justify-center items-center h-full'>
                         <img src={loading}></img>
                     </div>
              }
            </div>
            {/* 渲染商品卡片的区域 */}
            <div  className='bg-white w-3/4 overflow-auto '>
                {
                  foodsList.length > 0 
                  ? (
                    foodsList.map((category) => 
                    // 遍历foodsList数组，得到类别并渲染出此分类的食品分区
                    <div key = {`${category.tag}+'1'`}>
                      <div ref = {(el) => {foodsPartitionRef.current[category.tag] = el}} data-tag = {category.tag} key = {category.tag} tag = {category.tag} className='flex flex-col'>
                      {/* 分区名 */}
                        <div className='sticky top-0 py-1 pl-6 font-black text-xs sm:text-sm md:text-base lg:text-lg bg-white'>{category.name}</div>
                            <div>
                                {
                                  category.foods.map((foodsObject) =>
                                  // 遍历此类别的foods数组，得到每一个foods对象并渲染进此分类的整块区域
                                  <FoodsCard ref = {(el) => {foodsObjectRef.current[foodsObject.id] = el}} key = {foodsObject.id} foodsObject = {foodsObject}/>)
                                  }
                            </div>
                        </div>
                        {/* 给每个分区间设置的间隔，防止两分区交界在root边界 */}
                        <div key = {`${category.tag}+'2'`} className='w-full h-2 bg-white'></div>
                    </div>
                    ) 
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