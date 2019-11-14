import {
    REQ_GRANT_LOCATION,
    RCV_GRANT_LOCATION_OK,
    RCV_GRANT_LOCATION_NOK    
  } from '../Types';
  
  const initialState = {
    settings: {
        locationGranted: false
    },
    error: null,
    isLoading: false,
    didInvalidate: false
  };
  
  export default (state = initialState, action = {}) => {
    switch (action.type) {
      case REQ_GRANT_LOCATION:
        return {
          ...state,
          isLoading: true,
          error: null
        };
      case RCV_GRANT_LOCATION_OK:
        return {
          ...state,
          isLoading: false,
          settings: {
            locationGranted: true
          }
        };
      case RCV_GRANT_LOCATION_NOK:
        return {
          ...state,
          isLoading: false,
          error: action.error,
          settings: {
            locationGranted: false
          }
        };
      // 


      default:
        return state;
    }
  };