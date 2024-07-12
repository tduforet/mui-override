import {createTheme, type PaletteOptions, ThemeProvider} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      dark: '#3C2C74',
      main: '#836AE1',
      light: '#E3DDF8'
    }
  } as PaletteOptions,
})

export {ThemeProvider, theme}