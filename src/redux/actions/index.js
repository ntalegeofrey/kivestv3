export const largeSideNav = () => {
  return {
    type: "LARGESIDENAV",
  };
};

export const miniSideNav = () => {
  return {
    type: "MINISIDENAV",
  };
};
export const navItemActive = () => {
  return {
    type: "NAVITEMACTIVE",
  };
};
export const pageHeader = (text) => {
  return {
    type: "HEADERTEXT",
    payload: text,
  };
};
