import { combineReducers } from "redux";
import sideNavReducer from "./sideNavControl";
import navItemActive from "./activeNavItem";
import pageHeaderText from "./pageHeaderReducer";

const allReducers = combineReducers({
  sideNavControl: sideNavReducer,
  activeNavItem: navItemActive,
  pageHeader: pageHeaderText,
});

export default allReducers;
