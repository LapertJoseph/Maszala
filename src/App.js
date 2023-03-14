import { Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { useAuth } from "./context";
import { ReactNotifications } from "react-notifications-component";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./components/login";
import Logout from "./components/logout";
import MiniDrawer from "./ui/overview";
import "react-notifications-component/dist/theme.css";
import theme from "./ui/theme";

import "./App.css";

function App() {
  const { user } = useAuth();

  console.log("user", user);

  if (typeof user !== "undefined") {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ReactNotifications />
          <MiniDrawer />
        </ThemeProvider>
      </div>
    );
  } else {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ReactNotifications />
          {typeof user !== "undefined" && (
            <nav>
              <Link to="/">Login</Link>
              <Logout />
            </nav>
          )}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </ThemeProvider>
      </div>
    );
  }
}
export default App;
