const ActionsFactory = (type) => (payload) => (dispatch) => dispatch({ type, payload });

export default ActionsFactory;
