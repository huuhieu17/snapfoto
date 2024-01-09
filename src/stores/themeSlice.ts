import { createSlice } from "@reduxjs/toolkit"

export interface ThemeState {
    type: "light" | "dark"
}

const initialState: ThemeState = {
    type: "light"
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state) => {
            const currentState = state.type;
            if(currentState === "light"){
                state.type = "dark"
            }else{
                state.type = "light"
            }
        }
    }
})

export const {changeTheme} = themeSlice.actions;
export default themeSlice.reducer;