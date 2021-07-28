import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCT_SUCCESS,
  SEND_MESSAGE_SUCCESS,
  FETCH_BASKET_SUCCESS,
  SEND_ORDER_SUCCESS,
} from "../actions/index";

const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categories: [...action.payload.data],
      };
    }
    case FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: [...action.payload.data],
      };
    }
    case FETCH_PRODUCT_SUCCESS: {
      return {
        ...state,
        product: action.payload.data,
      };
    }
    case SEND_MESSAGE_SUCCESS: {
      return {
        ...state,
        message: action.payload.data,
      };
    }
    case SEND_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.payload.data,
      };
    }
    case FETCH_BASKET_SUCCESS: {
      return {
        ...state,
        basket: action.payload.data,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
