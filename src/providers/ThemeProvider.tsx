import { RootState } from "@/stores"
import { useSelector } from "react-redux"
import lightTheme from "@/assets/themes/light"
import darkTheme from "@/assets/themes/dark"
import { CssBaseline, ThemeProvider } from "@mui/material"

interface AppThemeProviderProps {
    children: any
}
export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
    const { type } = useSelector((state: RootState) =>  state.theme )
    const appliedTheme = type === "light" ? lightTheme : darkTheme;
    return (
        <ThemeProvider theme={appliedTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}