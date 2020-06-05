import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
} from "../actions/types";

const initialState = {
  listItems: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        listItems: action.payload,
        loading: false,
      };
    case DELETE_ITEM:
      return {
        ...state,
        listItems: state.listItems.filter(
          (listitems) => listitems.id !== action.payload
        ),
      };
    case ADD_ITEM:
      return {
        //payload is the new item sent by the action
        ...state,
        listItems: [action.payload, ...state.listItems],
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
