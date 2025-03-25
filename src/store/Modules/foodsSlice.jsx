import {createSlice} from '@reduxjs/toolkit'

const foodsSlice = createSlice(
    {
        name:'foods',
        initialState:{
            foodsList:[],
            activeTag:318569657,
            cartList:[],
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
            }
        }
    }
)
const {renderFoodsList,changeActiveTag,addCartList} = foodsSlice.actions;

export {renderFoodsList,changeActiveTag,addCartList}

export default foodsSlice.reducer;
