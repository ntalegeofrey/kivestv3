const sideNavReducer = (state = true, action) => {
  switch (action.type) {
    case "LARGESIDENAV":
      return state;

    case "MINISIDENAV":
      return !state;

    default:
      return state;
  }
};

export default sideNavReducer;
