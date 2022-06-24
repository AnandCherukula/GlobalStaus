import Axios from "axios";
import {
  SEND_LOGIN_DATA,
  SEND_LOGIN_DATA_SUCCESS,
  SEND_LOGIN_DATA_FAIL,
  HANDLE_SIGNUP_DATA,
  SEND_SIGNUP_DATA,
  LOGOUT_CLICKED,
  SEND_SIGNUP_DATA_SUCCESS,
  SEND_SIGNUP_DATA_FAIL,
  CLEAR_SIGNUP_DATA,
  TOGGLE_SIDEBAR,
  SAVE_PROGRESS_INDICATOR_STATUS,
} from "./LoginTypes";

import swal from "sweetalert";

import { BASEAPI_URL } from "../GlobalVars";

export const sendLoginDetails = (data) => {
  const url = BASEAPI_URL + "authenticate";
  return (dispatch) => {
    dispatch({
      type: SAVE_PROGRESS_INDICATOR_STATUS,
    });
    Axios.post(url, data)
      .then((response) => {
        dispatch({
          type: SEND_LOGIN_DATA_SUCCESS,
          payload: response.data,
        });
        swal({
          title: "Welcome" + response.data.user.name,
          text: "Succesfully Loged In",
          icon: "success",
          button: "Ok",
        });

        // console.log(response.data);
      })
      .catch((error) => {
        dispatch({
          type: SEND_LOGIN_DATA_FAIL,
          payload: error.data,
        });
        swal({
          title: "OOPS!!!",
          text: "Something Went Wrong.. Please Try Again",
          icon: "error",
          button: "Ok",
        });
      });
  };
};

export const handleLoginData = (field, value) => {
  return (dispatch) => {
    dispatch({
      type: SEND_LOGIN_DATA,
      payload: { value, field },
    });
  };
};

export const handleSignUpData = (feild, value) => {
  return (dispatch) => {
    dispatch({
      type: HANDLE_SIGNUP_DATA,
      payload: { value, feild },
    });
  };
};

export const sendSignUpDetails = (data) => {
  const url = BASEAPI_URL + "registerNewUser";

  return (dispatch) => {
    dispatch({
      type: SAVE_PROGRESS_INDICATOR_STATUS,
    });
    Axios.post(url, data)
      .then((response) => {
        dispatch({
          type: SEND_SIGNUP_DATA_SUCCESS,
          payload: response.data,
        });
        swal({
          title: "Welcome" + response.data.user.name,
          text: "Succesfully Loged In",
          icon: "success",
          button: "Ok",
        });
      })
      .catch((error) => {
        dispatch({
          type: SEND_SIGNUP_DATA_FAIL,
          payload: "OOPS! Something Wrong, Please Try Again...",
        });
        swal({
          title: "OOPS!!!",
          text: "Something Went Wrong.. Please Try Again",
          icon: "error",
          button: "Ok",
        });
      });
    dispatch({
      type: SEND_SIGNUP_DATA,
    });
  };
};

export const clearSignUpDetails = () => {
  return (dispatch) => {
    dispatch({
      type: SAVE_PROGRESS_INDICATOR_STATUS,
    });
    dispatch({
      type: CLEAR_SIGNUP_DATA,
    });
  };
};

export const handlogOut = () => {
  return (dispatch) => {
    dispatch({
      type: SAVE_PROGRESS_INDICATOR_STATUS,
    });
    dispatch({
      type: LOGOUT_CLICKED,
    });
  };
};

export const toggleSideBar = () => {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_SIDEBAR,
    });
  };
};
