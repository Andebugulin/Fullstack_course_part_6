import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    clearNotification() {
      return ''
    }
  }
})

export const setNotificationTimeout = (message, timeout = 5) => {
  const timeoutInSeconds = timeout * 1000 // Convert to milliseconds

  return dispatch => {
    dispatch(setNotification(message))
    setTimeout(() => {
      dispatch(clearNotification())
    }, timeoutInSeconds)
  }
}

export const { setNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer