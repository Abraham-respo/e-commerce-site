import { actionTypes } from "./actionTypes"

export const toggleMode = () => ({
    type: actionTypes.TOGGLE_MODE
})

export const getUserInput = (email) => ({
    type: actionTypes.USER_INPUT,
    payload: email
})




// fetch items

const fetchStart = () => ({
    type: actionTypes.FETCH_DATA_START
})

const fetchSuccess = (data) => ({
    type: actionTypes.FETCH_DATA_SUCCESS, 
    payload: data
})

const fetchFailed = (message) => ({
    type: actionTypes.FETCH_DATA_FAILED,
    payload: message
})


export const fetchProducts = () => async(dispatch) => {
    try{
        dispatch(fetchStart())
        const res = await fetch('https://fakestoreapi.com/products/')
        const data = await res.json()
        if (!res.ok){
            dispatch(fetchFailed('Something went wrong'))
        }
        else{
            dispatch(fetchSuccess(data))
        }
    }
    catch(err){
        console.log(err)
    }

} 

export const addToFavourite = (productItem) => ({
    type: actionTypes.ADD_TO_FAVOURITE,
    payload: productItem
})