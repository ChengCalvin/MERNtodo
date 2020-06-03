//make request to backend

import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";
import axios from "axios";

export const getItems = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios.get("/api/items").then((res) => {
    //console.log(res);
    dispatch({
      type: GET_ITEMS,
      payload: res.data,
    });
  });
};

export const deleteItems = (id) => {
  return {
    //go to the reducer for the action
    //send payload id to itemreducer
    type: DELETE_ITEM,
    payload: id,
  };
};

export const addItem = (item) => {
  return {
    //go to the reducer for the action
    type: ADD_ITEM,
    payload: item,
  };
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};
