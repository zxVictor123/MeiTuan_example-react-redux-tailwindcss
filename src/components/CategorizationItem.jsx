import { useDispatch} from "react-redux"
import { changeActiveTag } from "../store/Modules/foodsSlice"

const CategorizatonItem = (props) => {
    const {tag,name} = props
    const dispatch = useDispatch()
    
    return (
        <button onClick={dispatch(changeActiveTag(tag))} className="px-1 py-6 text-gray-600 text-sm sm:text-lg md:text-lg lg:text-xl">{name}</button>
    )
}
export default CategorizatonItem