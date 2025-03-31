import TopNav from "../../components/TopNav"
import { Outlet } from "react-router-dom"

const Shop1 = () => {
  return (
    <div className="flex flex-col h-screen">    
        <TopNav/>
        <Outlet/>
    </div>
  )
}
export default Shop1