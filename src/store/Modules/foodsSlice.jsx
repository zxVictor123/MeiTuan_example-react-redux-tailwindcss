import {createSlice} from '@reduxjs/toolkit'

const foodsSlice = createSlice(
    {
        name:'foods',
        initialState:{
            foodsList:[],
            activeTag:0,
            cartList:[],
            isCartListDisplay:false,
        },
        reducers:{
            renderFoodsList : (state,action) => {
                state.foodsList = action.payload
            },
            changeActiveTag : (state,action) => {
                state.activeTag = action.payload
            },
            addCartList : (state,action) => {
                const item = state.cartList.find((item) => item.id === action.payload.id)
                if(item)
                {item.count ++}
                else
                {state.cartList.push(action.payload)}
            },
            clearCartList : (state) => {
                state.cartList = []
            },
            switchIsCartListDisplay : (state) => {
                state.isCartListDisplay = !state.isCartListDisplay
            },
            setIsCartListDisplay: (state) => {
                state.isCartListDisplay = false
            },
            addFoodsObjectCount : (state,action) => {
                state.cartList.find((foodsObject) => foodsObject.id === action.payload).count++
            },
            subtractFoodsObjectCount : (state,action) => {
                const currentCount = state.cartList.find((foodsObject) => foodsObject.id === action.payload).count
                if (currentCount > 1 )
                {state.cartList.find((foodsObject) => foodsObject.id ===action.payload).count--}
                else {state.cartList = state.cartList.filter((foodsObject) => foodsObject.id != action.payload)}
            }
        }
    }
)
const {renderFoodsList,changeActiveTag,addCartList,clearCartList,switchIsCartListDisplay,addFoodsObjectCount,subtractFoodsObjectCount,setIsCartListDisplay} = foodsSlice.actions;

export {renderFoodsList,changeActiveTag,addCartList,clearCartList,switchIsCartListDisplay,addFoodsObjectCount,subtractFoodsObjectCount,setIsCartListDisplay}

export default foodsSlice.reducer;
