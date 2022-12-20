const pageHeaderText = (state = "Overview", action) => {
  switch (action.type) {
    case "HEADERTEXT":
      return action.payload;

    default:
      return state;
  }
};

export default pageHeaderText;
