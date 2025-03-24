import { useDispatch,useSelector} from "react-redux"
import { changeActiveTag } from "../store/Modules/foodsSlice"

const CategorizatonItem = (props) => {
    const {tag,name} = props
    const dispatch = useDispatch()
    const {activeTag} = useSelector((state) => state.foods)
    return (
        <button onClick={() => dispatch(changeActiveTag(tag))} className={`w-full py-6 text-gray-600 text-sm sm:text-lg md:text-lg lg:text-xl ${tag===activeTag&&'font-black bg-white'}`}>{name}</button>
    )
}
export default CategorizatonItem