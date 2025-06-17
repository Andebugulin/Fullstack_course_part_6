import { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteFilter from './components/AnecdoteFilter'
import Notification from './components/Notification'
import anecdoteService from './services/anecdotes'
import { useDispatch } from 'react-redux'
import { setAnecdotes } from './reducers/anecdoteReducer'


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService
      .getAll()
      .then(anecdotes => {
        dispatch(setAnecdotes(anecdotes))
      })
      .catch(error => {
        console.error('Failed to fetch anecdotes:', error)
      })
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteFilter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App