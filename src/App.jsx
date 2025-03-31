import { useDispatch } from "react-redux";
import { useEffect } from "react";
import FetchFoodsList from "./store/Thunks/FetchFoodsList";
import { Outlet } from "react-router-dom";

const App = () => {
    // 调用获取后端数据的action creator，以初始化foodsList
    const dispatch = useDispatch()
    useEffect(()=>{dispatch(FetchFoodsList())},[dispatch])
    
    return <Outlet />
}
export default App;