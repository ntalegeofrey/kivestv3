const navItemActive = (state = true, action) => {
  switch (action.type) {
    case "NAVITEMACTIVE":
      return state;

    default:
      return state;
  }
};

export default navItemActive;
