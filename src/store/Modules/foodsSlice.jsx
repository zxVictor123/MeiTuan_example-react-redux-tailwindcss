import {createSlice} from '@reduxjs/toolkit'

const foodsSlice = createSlice(
    {
        name:'foods',
        initialState:{
            foodsList:[]
        },
        reducers:{
            renderFoodsList : (state,action) => {
                state.foodsList = action.payload
            }
        }
    }
)
const {renderFoodsList} = foodsSlice.actions;

export {renderFoodsList}

export default foodsSlice.reducer;
