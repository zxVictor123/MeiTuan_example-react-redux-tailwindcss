import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";

const Layout = () => {
    return(
        <div className="flex flex-col h-screen">    
            <TopNav/>
            <Outlet/>
        </div>
    )
}
export default Layout;