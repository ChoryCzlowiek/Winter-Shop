import axios from "axios";

export const FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";
export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
export const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";
export const SEND_MESSAGE_REQUEST = "SEND_MESSAGE_REQUEST";
export const SEND_MESSAGE_SUCCESS = "SEND_MESSAGE_SUCCESS";
export const SEND_MESSAGE_FAILURE = "SEND_MESSAGE_FAILURE";
export const FETCH_BASKET_REQUEST = "FETCH_BASKET_REQUEST";
export const FETCH_BASKET_SUCCESS = "FETCH_BASKET_SUCCESS";
export const FETCH_BASKET_FAILURE = "FETCH_BASKET_FAILURE";
export const SEND_ORDER_REQUEST = "SEND_ORDER_REQUEST";
export const SEND_ORDER_SUCCESS = "SEND_ORDER_SUCCESS";
export const SEND_ORDER_FAILURE = "SEND_ORDER_FAILURE";

export const fetchCategories = () => (dispatch) => {
  dispatch({ type: FETCH_CATEGORIES_REQUEST });

  return axios
    .get("http://localhost:5000/api/product/getAllCategories")
    .then(({ data }) => {
      dispatch({
        type: FETCH_CATEGORIES_SUCCESS,
        payload: {
          data,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_CATEGORIES_FAILURE });
    });
};

export const fetchProducts = (categoryName) => (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });

  return axios
    .get(`http://localhost:5000/api/product/${categoryName}`, {
      params: {
        categoryName: categoryName,
      },
    })
    .then(({ data }) => {
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: {
          data,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_PRODUCTS_FAILURE });
    });
};

export const fetchProduct = (category, productID) => (dispatch) => {
  dispatch({ type: FETCH_PRODUCT_REQUEST });

  return axios
    .get(`http://localhost:5000/api/product/${category}/${productID}`, {
      params: {
        category: category,
        productID: productID,
      },
    })
    .then(({ data }) => {
      dispatch({
        type: FETCH_PRODUCT_SUCCESS,
        payload: {
          data,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_PRODUCT_FAILURE });
    });
};

export const sendMessage = (messageContent) => (dispatch) => {
  dispatch({ type: SEND_MESSAGE_REQUEST });

  return axios
    .post("http://localhost:5000/api/message/sendMessage", {
      ...messageContent,
    })
    .then(({ data }) => {
      console.log(data);
      dispatch({ type: SEND_MESSAGE_SUCCESS, payload: { data } });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: SEND_MESSAGE_FAILURE });
    });
};

export const fetchBasket = () => (dispatch) => {
  dispatch({ type: FETCH_BASKET_REQUEST });

  return axios
    .get("http://localhost:5000/api/basket/getBasket")
    .then(({ data }) => {
      dispatch({
        type: FETCH_BASKET_SUCCESS,
        payload: {
          data,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_BASKET_FAILURE });
    });
};

export const sendOrder = (orderData, Products) => (dispatch) => {
  dispatch({ type: SEND_ORDER_REQUEST });

  return axios
    .post("http://localhost:5000/api/order/sendOrder", {
      ...orderData,
      Products,
    })
    .then(({ data }) => {
      console.log(data);
      dispatch({ type: SEND_ORDER_SUCCESS, payload: { data } });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: SEND_ORDER_FAILURE });
    });
};
