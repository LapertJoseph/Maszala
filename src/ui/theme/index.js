// App Theme

import { createTheme } from "@mui/material/styles";

/**
 * My theme
 */

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "rgb(102, 157, 246)" },
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            background: "orange",
          },
        },
      },
    },
    // background { paper: 'rgb(5, 30, 52'},
  },
});

export default theme;
