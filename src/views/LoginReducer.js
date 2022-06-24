import {
  CLEAR_SIGNUP_DATA,
  HANDLE_SIGNUP_DATA,
  LOGOUT_CLICKED,
  SAVE_PROGRESS_INDICATOR_STATUS,
  SEND_LOGIN_DATA,
  SEND_LOGIN_DATA_FAIL,
  SEND_LOGIN_DATA_SUCCESS,
  SEND_SIGNUP_DATA_FAIL,
  SEND_SIGNUP_DATA_SUCCESS,
  TOGGLE_SIDEBAR,
} from "./LoginTypes";

const INITIAL_STORE = {
  loader: false,
  login: {
    email: "",
    password: "",
    error: "",
    response: {},
    isLoggedIn: false,
  },
  signUp: {
    email: "",
    password: "",
    name: "",
    userName: "",
    phone: "",
  },
  isSignUpSuccess: false,
  headerInput: "",
  toggleSideMenu: false,
};

export default (state = INITIAL_STORE, action) => {
  switch (action.type) {
    case SEND_LOGIN_DATA:
      return SaveLoginDetails(action, state);
    case SAVE_PROGRESS_INDICATOR_STATUS:
      return {
        ...state,
        loader: true,
      };

    case TOGGLE_SIDEBAR:
      return {
        ...state,
        toggleSideMenu: !state.toggleSideMenu,
      };
    case SEND_LOGIN_DATA_SUCCESS:
      return {
        ...state,
        loader: false,
        login: {
          response: action.payload,
          isLoggedIn: true,
        },
      };

    case SEND_LOGIN_DATA_FAIL:
      return {
        ...state,
        loader: false,
        login: {
          error: action.payload,
          isLoggedIn: false,
        },
      };

    case LOGOUT_CLICKED:
      return {
        ...state,
        loader: false,
        login: {
          isLoggedIn: false,
        },
      };
    case SEND_SIGNUP_DATA_SUCCESS:
      return {
        ...state,
        loader: false,
        isSignUpSuccess: true,
      };
    case SEND_SIGNUP_DATA_FAIL:
      return {
        ...state,
        loader: false,
        isSignUpSuccess: false,
      };
    case CLEAR_SIGNUP_DATA:
      return {
        ...state,
        loader: false,
        isSignUpSuccess: false,
      };
    case HANDLE_SIGNUP_DATA:
      return HandleSignUpdata(action, state);
  }
  return state;
};

function SaveLoginDetails(action, state) {
  if (action.payload.field === "email") {
    return {
      ...state,
      login: {
        ...state.login,
        email: action.payload.value,
      },
    };
  } else if (action.payload.field === "password") {
    return {
      ...state,
      login: {
        ...state.login,
        password: action.payload.value,
      },
    };
  }
}

function HandleSignUpdata(action, state) {
  if (action.payload.feild === "name") {
    return {
      ...state,
      signUp: {
        ...state.signUp,
        name: action.payload.value,
      },
    };
  } else if (action.payload.feild === "password") {
    return {
      ...state,
      signUp: {
        ...state.signUp,
        password: action.payload.value,
      },
    };
  } else if (action.payload.feild === "userName") {
    return {
      ...state,
      signUp: {
        ...state.signUp,
        userName: action.payload.value,
      },
    };
  } else if (action.payload.feild === "phone") {
    return {
      ...state,
      signUp: {
        ...state.signUp,
        phone: action.payload.value,
      },
    };
  } else if (action.payload.feild === "email") {
    return {
      ...state,
      signUp: {
        ...state.signUp,
        email: action.payload.value,
      },
    };
  } else if (action.payload.feild === "headerSearch") {
    return {
      ...state,
      headerInput: action.payload.value,
    };
  }
}
