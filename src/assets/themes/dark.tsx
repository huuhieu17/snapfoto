import { createTheme } from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#000000',
            paper: '#000000'
        },
        primary: {
            main: "#F6B17A"
        },
        secondary: {
            main: "#F6B17A"
        }
    },
    typography: {
        allVariants: {
            color: 'white'
        }
    }
})

export default darkTheme;