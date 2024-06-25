import { FETCH_ALL, FETCH_ASSIGNED, FETCH_CATEGORY } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const fetchall = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAll();

    dispatch({ type: FETCH_ALL, data });
    console.log(data)

    
  } catch (error) {
    console.log(error);
  }
};

export const fetchcategory = (formData) => async (dispatch) => {
  try {
    console.log(formData);
    const { data } = await api.fetchCategory(formData);

    dispatch({ type: FETCH_ALL, data });
    // router("/Home");
    
  } catch (error) {
    console.log(error.message);
  }
};


export const assign = (formData,router) => async (dispatch) => {
    try {
      console.log(formData);
      const { data } = await api.Assign(formData);
  
      router("/Home");
  
      
    } catch (error) {
      console.log(error.message);
    }
  };


  export const myassign = (formData) => async (dispatch) => {
    try {
      console.log(formData);
      const { data } = await api.myAssign(formData);
      dispatch({ type: FETCH_ASSIGNED, data });
      
    } catch (error) {
      console.log(error.message);
    }
  };
  


