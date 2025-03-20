import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";

const Layout = () => {
    return(
        <div>
            <div>
                <TopNav/>
            </div>
            <Outlet/>
        </div>
    )
}
export default Layout;