//make request to backend

import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.headers.common = { "Content-Type": "application/json" };

export const getItems = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios
    .get("/api/items")
    .then((res) => {
      //console.log(res);
      dispatch({
        type: GET_ITEMS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const deleteItems = (id) => {
  return {
    //go to the reducer for the action
    //send payload id to itemreducer
    type: DELETE_ITEM,
    payload: id,
  };
};

export const addItem = (item) => (dispatch) => {
  axios
    .post("/api/items", item)
    .then((res) => {
      dispatch({ type: ADD_ITEM, payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};
