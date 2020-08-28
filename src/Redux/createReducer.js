const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "DEL_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transactions) => transactions.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default Reducer;
