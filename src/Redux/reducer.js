import { actionTypes } from "./actionTypes";

const initialState = {
    isLoggedIn: false,
    isDark: true,
    email: '',
    cart: [],
    isLoading: false,
    allProducts: [],
    message: '',
    userInfo: {},
    favourites: []

}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.TOGGLE_MODE:
            return {
              ...state,  isDark: !state.isDark
            }
        case actionTypes.USER_INPUT:
            return {
                ...state, email:action.payload
            }
        case actionTypes.FETCH_DATA_START: 
        return {
            ...state, isLoading: true
        }
        case actionTypes.FETCH_DATA_SUCCESS:
            return{
                ...state, isLoading: false, allProducts: action.payload
            }
        case actionTypes.FETCH_DATA_FAILED:
            return {
                ...state, isLoading: false, message: action.payload
            }
        case actionTypes.ADD_TO_FAVOURITE:
            return {
                ...state, favourites: [...state.favourites, action.payload]
            }
            default:
                return state
            
    }
}

