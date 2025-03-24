import {createSlice} from '@reduxjs/toolkit'

const foodsSlice = createSlice(
    {
        name:'foods',
        initialState:{
            foodsList:[],
            activeTag:318569657,
        },
        reducers:{
            renderFoodsList : (state,action) => {
                state.foodsList = action.payload
            },
            changeActiveTag : (state,action) => {
                state.activeTag = action.payload
            }
        }
    }
)
const {renderFoodsList,changeActiveTag} = foodsSlice.actions;

export {renderFoodsList,changeActiveTag}

export default foodsSlice.reducer;
