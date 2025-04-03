import {createSlice} from '@reduxjs/toolkit'

const foodsSlice = createSlice(
    {
        name: 'foods',
        initialState: {
            foodsList: [],
            activeTag: 0,
            cartList: [],
            isCartListDisplay: false,
            searchContent: '',
            activeFoodsObjectId: 0,
            isClickCategory: false,
        },
        reducers: {
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
            },
            getSearchContent : (state,action) => {
                state.searchContent = action.payload
            },
            changeActiveFoodsObjectId : (state,action) => {
                state.activeFoodsObjectId =action.payload
            },
            switchIsClickCategory: (state) => {
                state.isClickCategory = !state.isClickCategory
            },
        }
    }
)
// 解构出action creator 
const {
        renderFoodsList,
        changeActiveTag,
        addCartList,
        clearCartList,
        switchIsCartListDisplay,
        addFoodsObjectCount,
        subtractFoodsObjectCount,
        setIsCartListDisplay,
        getSearchContent,
        changeActiveFoodsObjectId,
        switchIsClickCategory,
      } = foodsSlice.actions;
// 导出
export {
        renderFoodsList,
        changeActiveTag,
        addCartList,
        clearCartList,
        switchIsCartListDisplay,
        addFoodsObjectCount,
        subtractFoodsObjectCount,
        setIsCartListDisplay,
        getSearchContent,
        changeActiveFoodsObjectId,
        switchIsClickCategory,
       }
// 导出所有reducer
export default foodsSlice.reducer;
