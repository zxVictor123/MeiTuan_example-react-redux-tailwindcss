import { useNavigate, useLocation } from "react-router-dom";
import { getSearchContent, changeActiveTag, changeActiveFoodsObjectId} from "../store/Modules/foodsSlice";
import { useDispatch, useSelector } from "react-redux";

const TopNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { foodsList, searchContent } = useSelector((state) => state.foods);

  // 构造一个简易防抖函数
  const debounce = (fn, t) => {
    let timer;
    return function (...args) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn(...args);
      }, t);
    };
  };

  const debounceGetSearchContent = debounce((value) => dispatch(getSearchContent(value)), 300);
  const handleChangeActiveTag = (value) => dispatch(changeActiveTag(value));
  const handleChangeActiveFoodsObjectId = (value) => dispatch(changeActiveFoodsObjectId(value));

  // 定义导航项及其对应的路径
  const navItems = [
    { id: "1", label: "点菜", path: "/" },
    { id: "2", label: "评价", path: "/Evaluation" },
    { id: "3", label: "商家", path: "/Merchant" },
  ];

  return (
    <div className="flex bg-gray-100 justify-between h-1/10 items-center mb-2 relative">
      {/* 三个路由 */}
      <div className="w-2/3 text-base text-gray-500 md:text-lg lg:text-2xl flex">
        {navItems.map((item) => (
          <button
            key={item.id}
            id={item.id}
            className={`w-1/3 relative ${location.pathname === item.path ? 'text-black transform duration-300' : ''}`}
            onClick={() => {
              navigate(item.path);
            }}
            aria-current={location.pathname === item.path ? 'page' : undefined}
          >
            <span>{item.label}</span>
            {/* 橙色小条：当前路由时显示，左右居中，宽度缩短 */}
            <div
              className={`absolute bottom-0  left-1/2 transform -translate-x-1/2 w-4 md:w-5 lg:w-6 h-1 rounded-full bg-amber-300 transition-opacity duration-300 ${
                location.pathname === item.path ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </button>
        ))}
      </div>
      {/* 搜索框 */}
      <div className="w-1/3 flex justify-end pr-2">
        {location.pathname === '/' && (
          <input
            type="search"
            placeholder="请输入菜品名称"
            onChange={(event) => debounceGetSearchContent(event.target.value)}
            className="pl-6 border-1 text-gray-600 bg-gray-300 rounded-full w-32 sm:w-36 md:w-48 lg:w-64 h-6 md:h-8 lg:h-10 text-xs md:text-sm lg:text-md"
          />
        )}
        <ul className="flex flex-col absolute bg-gray-100 top-[100%] w-32 sm:w-36 md:w-48 lg:w-64 z-1">
          {foodsList.length > 0 && searchContent !== '' ? (
            foodsList
              .flatMap((category) => category.foods)
              .filter((foodsObject) => foodsObject.name.includes(searchContent))
              .map((searchItem) => (
                <li
                  key={searchItem.id}
                  onClick={() => {
                    handleChangeActiveTag(searchItem.tag);
                    handleChangeActiveFoodsObjectId(searchItem.id);
                  }}
                  className="hover:cursor-default hover:font-black hover:scale-102 active:scale-98 hover:bg-gray-300 py-1 md:py-2 pl-1 md:pl-2 text-xs md:text-sm lg:text-md text-gray-600"
                >
                  {searchItem.name}
                </li>
              ))
          ) : (
            <li></li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TopNav;