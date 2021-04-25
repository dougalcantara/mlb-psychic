import { createContext, useReducer } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyBEf_hX6K4AnEX5Pk9JLd4QTEzwfpShd5Y',
  authDomain: 'mlb-psychic.firebaseapp.com',
  projectId: 'mlb-psychic',
  storageBucket: 'mlb-psychic.appspot.com',
  messagingSenderId: '390890680407',
  appId: '1:390890680407:web:ce4a816e291988e3fdf312',
  measurementId: 'G-BMGVDKZDZS'
});
// firebase.analytics();

export const auth = firebase.auth();

export const AppContext = createContext();

const initialState = {
  user: null,
};

const AppContextActions = {
  SET_USER: 'SET_FOCUSED_USER',
  RESET: 'RESET',
};

function AppContextReducer(state, action) {
  const { SET_USER, RESET } = AppContextActions;
  const { value } = action;

  switch (action.type) {
    case SET_USER:
      return { ...state, user: value };
    case RESET:
      return { ...state, ...initialState };
    default:
      return state;
  }
}

export function AppContextProvider({ children }) {
  const { SET_USER, RESET } = AppContextActions;
  const [state, dispatch] = useReducer(AppContextReducer, initialState);

  const providerValue = {
    user: state.user,
    setUser(user) {
      dispatch({
        type: SET_USER,
        value: user,
      });
    },
    reset() {
      dispatch({
        type: RESET,
      });
    },
  };

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
}
