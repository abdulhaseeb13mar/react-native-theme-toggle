export const ToggleTheme = theme => {
  return async dispatch => {
    dispatch({
      type: theme ? 'DARK_THEME' : 'LIGHT_THEME',
    });
  };
};
