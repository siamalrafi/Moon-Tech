import { actionTypes } from "./ActionTypes";

export const intialState = {
    loading: false,
    products: [],
    error: false,
    cart: [],
    wishlist: [],
};


export const pruductReducer = (state, action) => {
    switch (action.type) {

        case actionTypes.FATCHING_START:
            return {
                ...state,
                loading: true,
                error: false,
            };

        case actionTypes.FATCHING_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: false,
            };

        case actionTypes.FATCHING_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };

        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };

        case actionTypes.WISHLIST:
            return {
                ...state,
                wishlist: [...state.wishlist, action.payload],
            };


        default:
            return state;
    };


};