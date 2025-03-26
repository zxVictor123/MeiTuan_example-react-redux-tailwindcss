import { Outlet } from "react-router-dom";
import TopNav from "./components/TopNav";
import FetchfoodsList from "./store/Thunks/FetchFoodsList";


const App = () => {
    //  拿数据并传入store中
   
    return(
        <div className="flex flex-col h-screen">    
            <TopNav/>
            <Outlet/>
        </div>
    )
}
export default App;