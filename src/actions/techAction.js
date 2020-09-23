import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  // SET_LOADING,
  THECHS_ERROR
} from './types';

// Get techs from server
export const getTechs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: THECHS_ERROR,
      payload: err.response.data
    })
  }
};

// Add technicion to server
export const addTech = (tech) => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: THECHS_ERROR,
      payload: err.response.data
    })
  }
};

// Delete tech from server
export const deleteTech = (id) => async dispatch => {
  try {
    setLoading();

    await fetch(`/techs/${id}`,{
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: THECHS_ERROR,
      payload: err.response.data
    })
  }
};


// Set Loading to true
export const setLoading = () => {
  return {
    type: THECHS_ERROR
  }
}