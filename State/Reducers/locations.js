import {
    REQ_ADD_LOCATION,
    RCV_ADD_LOCATION_OK,
    RCV_ADD_LOCATION_NOK,

    REQ_REMOVE_LOCATION,
    RCV_REMOVE_LOCATION_OK,

    REQ_REMOVE_ALL_LOCATIONS,
    RCV_REMOVE_ALL_LOCATIONS_OK 
  } from '../Types';
  
  const initialState = {
    items: [],
    error: null,
    isLoading: false,
    didInvalidate: false
  };
  
  export default (state = initialState, action = {}) => {
    switch (action.type) {
      case REQ_ADD_LOCATION:
        return {
          ...state,
          isLoading: true,
          error: null
        };
      case RCV_ADD_LOCATION_OK:
        return {
          ...state,
          isLoading: false,
          items: [
            action.item,
            ...state.items              
          ].slice(0, 30)
        };
      case RCV_ADD_LOCATION_NOK:
        return {
          ...state,
          isLoading: false,
          error: action.error
        };
      // remove location
      case REQ_REMOVE_LOCATION:
        return {
          ...state,
          isLoading: true,
          error: null
        };
      case RCV_REMOVE_LOCATION_OK: {

        const { items } = state;
        const newItems = items.filter(x => x._id !== action.id);

        return {
          ...state,
          isLoading: false,
          items: newItems
        };
      }
      // remove all locations
      case REQ_REMOVE_ALL_LOCATIONS:
        return {
          ...state,
          isLoading: true,
          error: null
        };
      case RCV_REMOVE_ALL_LOCATIONS_OK: {

        return {
          ...state,
          isLoading: false,
          items: [] 
        };
      }
      default:
        return state;
    }
  };