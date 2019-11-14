import {
    REQ_ADD_LOCATION,
    RCV_ADD_LOCATION_OK,
    RCV_ADD_LOCATION_NOK,

    REQ_REMOVE_LOCATION,
    RCV_REMOVE_LOCATION_OK,

    REQ_REMOVE_ALL_LOCATIONS,
    RCV_REMOVE_ALL_LOCATIONS_OK
  } from '../Types';
  
 
  const createLocationAxios = data => {
    // axios http post
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 50);
    })
    
  };
  
  export const requestCreateLocation = query => ({
    type: REQ_ADD_LOCATION,
    query
  });
  
  export const receiveCreateLocationOk = item => ({
    type: RCV_ADD_LOCATION_OK,
    item
  });
  export const receiveCreateLocationNok = error => ({
    type: RCV_ADD_LOCATION_NOK,
    error
  });
  
  const createLocationDispatcher = data => dispatch => {
    dispatch(requestCreateLocation(data));
    return createLocationAxios(data)
      .then(result => {
        return dispatch(receiveCreateLocationOk(result));
      })
      .catch(err => {
        return dispatch(receiveCreateLocationNok(err));
      });
  };
  
  export const createLocation = data => (dispatch, getState) => {
    return dispatch(createLocationDispatcher(data));
  };


  // remove location action
  
  export const removeLocation = id => (dispatch, getState) => {
    return dispatch(removeLocationDispatcher(id));
  };

  const removeLocationDispatcher = id => dispatch => {
    dispatch(requestRemoveLocation(id));
    return dispatch(receiveRemoveLocationOk(id));
  };

  export const requestRemoveLocation = query => ({
    type: REQ_REMOVE_LOCATION,
    query
  });
  
  export const receiveRemoveLocationOk = id => ({
    type: RCV_REMOVE_LOCATION_OK,
    id
  });

  // remove all locations

  export const removeAllLocations = () => (dispatch, getState) => {
    return dispatch(removeAllLocationsDispatcher());
  };

  const removeAllLocationsDispatcher = () => dispatch => {
    dispatch(requestRemoveAllLocations());
    return dispatch(receiveRemoveAllLocationsOk());
  };

  export const requestRemoveAllLocations = query => ({
    type: REQ_REMOVE_ALL_LOCATIONS,
    query
  });
  
  export const receiveRemoveAllLocationsOk = () => ({
    type: RCV_REMOVE_ALL_LOCATIONS_OK,
  });