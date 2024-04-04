const initialState = {
    users: {
      name: "",
      lastName: "",
      email: "",
      favorite: false,
    },
  };
  
  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case "TOGGLE_FAVORITE":
        return {
          ...state,
          users: state.users.map((user) =>
            user.id === action.payload
              ? { ...user, favorite: !user.favorite }
              : user
          ),
        };
      default:
        return state;
    }
  };
  
  export default contactReducer;