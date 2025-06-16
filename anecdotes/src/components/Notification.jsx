import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { clearNotification } from '../reducers/notificationReducer'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        dispatch(clearNotification())
      }, 5000)
      
      return () => clearTimeout(timer) 
    }
  }, [notification, dispatch])

  if (!notification) {
    return null
  }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification