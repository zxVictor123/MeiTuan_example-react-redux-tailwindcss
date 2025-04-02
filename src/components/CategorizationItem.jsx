import { useDispatch} from "react-redux"
import { changeActiveTag,switchIsClickCategory } from "../store/Modules/foodsSlice"
import React from "react"

const CategorizatonItem = React.forwardRef((props,ref) => {
    const {tag,name} = props
    const dispatch = useDispatch()
    return (
        <button onClick={() => {dispatch(changeActiveTag(tag)); dispatch(switchIsClickCategory())}} ref={ref} className="w-full py-6 text-gray-600 text-sm sm:text-lg md:text-lg lg:text-xl">{name}</button>
    )
})
export default CategorizatonItem