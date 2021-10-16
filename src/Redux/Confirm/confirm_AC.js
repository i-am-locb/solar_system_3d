export const toggleConfirm = () => {
  return (dispatch) => {
    dispatch({ type: "TOGGLE_CONFIRM", isConfirm: true });
  };
};
