import { Outlet } from "react-router-dom";
import TopNav from "./components/TopNav";
import { useEffect } from 'react';
import FetchfoodsList from "./store/Thunks/FetchFoodsList";
import { useDispatch} from 'react-redux';

const App = () => {
    //  拿数据并传入store中
    const dispatch = useDispatch()
    useEffect(()=>{dispatch(FetchfoodsList())},[dispatch])
   
    return(
        <div className="flex flex-col h-screen">    
            <TopNav/>
            <Outlet/>
        </div>
    )
}
export default App;