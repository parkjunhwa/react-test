import { createTheme } from "@mui/material";

// Create a custom theme
export let theme = createTheme({
    components:{
        palette: {
            primary: {
              main: '#1976d2',  // Blue color
            },
            secondary: {
              main: '#d32f2f',  // Red color
            },
          },
          typography: {
            h1: {
              fontSize: '2.5rem',
              fontWeight: 700,
            },
            body1: {
              fontSize: '1rem',
            },
          }
    }

    
  });