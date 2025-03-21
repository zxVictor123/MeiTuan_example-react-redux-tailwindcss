import { renderFoodsList } from "../Modules/foodsSlice"
import axios from "axios"

const FetchFoodsList = () => {
    return (
        async (dispatch) =>{
            const res = await axios.get('http://localhost:3004/takeaway')
            dispatch(renderFoodsList(res.data))
        }
    )
}
export default FetchFoodsList