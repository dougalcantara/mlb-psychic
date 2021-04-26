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
  currentGame: null,
};

const AppContextActions = {
  SET_USER: 'SET_USER',
  SET_CURRENT_GAME: 'SET_CURRENT_GAME',
  RESET: 'RESET',
};

function AppContextReducer(state, action) {
  const { SET_USER, RESET, SET_CURRENT_GAME } = AppContextActions;
  const { value } = action;

  switch (action.type) {
    case SET_USER:
      return { ...state, user: value };
    case RESET:
      return { ...state, ...initialState };
    case SET_CURRENT_GAME:
      return { ...state, currentGame: value };
    default:
      return state;
  }
}

export function AppContextProvider({ children }) {
  const { SET_USER, SET_CURRENT_GAME, RESET } = AppContextActions;
  const [state, dispatch] = useReducer(AppContextReducer, initialState);

  const providerValue = {
    user: state.user,
    setUser(user) {
      dispatch({
        type: SET_USER,
        value: user,
      });
    },
    setCurrentGame(game) {
      dispatch({
        type: SET_CURRENT_GAME,
        value: game,
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
