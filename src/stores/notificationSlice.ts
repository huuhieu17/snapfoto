


  import { createSlice, current, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Notification = {
    id?: string;
    type?: 'info' | 'warning' | 'success' | 'error';
    title?: string;
    message?: string;
};

export interface NotificationState {
    notifications: Array<Notification>,
}
const initialState: NotificationState = {
    notifications: []
}

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
        const currentState = current(state);
        const listNotification = currentState.notifications;
        const notification: Omit<Notification, 'id'> = action.payload;
        state.notifications = [...listNotification, {id: nanoid(), ...notification}];
    },
    dismissNotification: (state, action: PayloadAction<string>) => {
        const currentState = current(state);
        const listNotification = currentState.notifications;
        const notifyId = action.payload;
        state.notifications = listNotification.filter(item => item.id !== notifyId);
    }
  },
})

// Action creators are generated for each case reducer function
export const { addNotification, dismissNotification } = notificationSlice.actions

export default notificationSlice.reducer