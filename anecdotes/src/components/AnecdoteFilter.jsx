import { setFilter } from "../reducers/filterReducer"
import { useDispatch } from 'react-redux'

const AnecdoteFilter = () => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        const content = event.target.value
        dispatch(setFilter(content))
    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    )
  }
  
  export default AnecdoteFilter