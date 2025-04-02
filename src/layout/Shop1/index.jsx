import TopNav from "../../components/TopNav"
import { Outlet } from "react-router-dom"
import { useRef } from "react"

const Shop1 = () => {
  // 创建ref
  const TopNavRef = useRef(null)

  return (
    <div className="flex flex-col h-screen">    
        <TopNav ref = {TopNavRef}/>
        <Outlet/>
    </div>
  )
}
export default Shop1