import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from "@/stores/counterSlice";
import NotificationReducer from "@/stores/notificationSlice";
export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    notification: NotificationReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch