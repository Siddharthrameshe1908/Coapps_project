import { SIGNIN, SIGNUP } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: SIGNIN, data });

    router('/Home');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router,setMess) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: SIGNUP, data });

    router('/Home');
  } catch (error) {
    console.log(error);
    if (error?.response?.data) {
        setMess(error.response.data);
      } else {
        setMess(error.message);
      }

  }
};


