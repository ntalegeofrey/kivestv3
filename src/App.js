import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { AppBar } from "./components/AppBar";
import SideNav from "./components/SideNav";
import { NavItems } from "./data/nav-items";
import { MainContainer } from "./styles/StyledContentContainer";
import ThemeCustomization from "./theme/light";

function App() {
  const sideNavState = useSelector((state) => state.sideNavControl);
  return (
    <ThemeCustomization>
      <SideNav />
      <AppBar />

      <MainContainer component="main" open={sideNavState}>
        {/* puts content below appbar */}
        <Box sx={{ height: "45px" }}></Box>
        <Routes>
          {NavItems().map((item) => (
            <Route
              key={item.id}
              path={item.path}
              element={<>{item.component}</>}
            />
          ))}
        </Routes>
      </MainContainer>
    </ThemeCustomization>
  );
}

export default App;
