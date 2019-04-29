const initialUserState = {
  name: "Umair"
};

export const user_reducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        name: action.payload.name
      };

    default:
      return state;
  }
};
