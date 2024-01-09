import { createTheme } from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#F6B17A"
        },
        secondary: {
            main: "#7077A1"
        }
    },
    typography: {
        allVariants: {
            color: 'white'
        }
    }
})

export default darkTheme;