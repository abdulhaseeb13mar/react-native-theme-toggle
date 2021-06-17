import {combineReducers} from 'redux';
const initialState = {
  theme: false,
};
const themeReducer = (theme = initialState, {type}) => {
  switch (type) {
    case 'DARK_THEME':
      return {theme: true};
    case 'LIGHT_THEME':
      return {theme: false};
    default:
      return theme;
  }
};

export default combineReducers({themeReducer});
