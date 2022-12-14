import axios from "axios";
import Swal from "sweetalert2";

export const ADD_USER = "ADD_USER";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const UPDATE_PROFILE = "UPDATE_PROFILE";

// add
export const addUser = (data) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: ADD_USER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "POST",
      url: "https://testing-kampusg.herokuapp.com/api/v1/auth/register",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch({
          // get data
          type: ADD_USER,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
        window.location.href = "/login";
      })
      .catch((error) => {
        // error
        Swal.fire({
          position: "center",
          icon: "error",
          title: `Registration Failed ${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch({
          type: ADD_USER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

// Login
export const loginViaForm = (data) => async (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
    user: false,
  });

  try {
    const response = await fetch(
      "https://testing-kampusg.herokuapp.com/api/v1/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();

    const userInfo = await fetch(
      "https://testing-kampusg.herokuapp.com/api/v1/profile/me",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${result.data.token}`,
        },
      }
    );
    const user = JSON.parse(JSON.stringify(await userInfo.json()));

    if (result.data.token) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch({
        type: LOGIN,
        payload: {
          loading: false,
          data: result.token,
          errorMessage: false,
        },
        user: user,
      });
      window.location.href = "/";
    } else {
      dispatch({
        type: LOGIN,
        payload: {
          loading: false,
          data: false,
          errorMessage: result.message,
        },
        user: false,
      });
      dispatch({
        type: AUTH_ERROR,
        payload: {
          loading: false,
          data: false,
          errorMessage: result.message,
        },
        user: false,
      });

      Swal.fire({
        position: "center",
        icon: "error",
        title: `Error ${result.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {
    dispatch({
      type: LOGIN,
      payload: {
        loading: false,
        data: false,
        errorMessage: error,
      },
      user: false,
    });
    dispatch({
      type: AUTH_ERROR,
      payload: {
        loading: false,
        data: false,
        errorMessage: error,
      },
      user: false,
    });

    Swal.fire({
      position: "center",
      icon: "error",
      title: `Error ${error}`,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

const authError = (error) => async (dispatch) => {
  dispatch({
    type: AUTH_ERROR,
    payload: {
      loading: false,
      data: false,
      errorMessage: error.message,
    },
    user: false,
  });

  setTimeout(() => {
    dispatch({
      type: AUTH_ERROR,
      payload: {
        loading: false,
        data: false,
        errorMessage: error.message,
      },
      user: false,
    });
  }, 5000);
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });

  Swal.fire({
    position: "center",
    icon: "success",
    title: "Logout Successful",
    showConfirmButton: false,
    timer: 1500,
  });
};
