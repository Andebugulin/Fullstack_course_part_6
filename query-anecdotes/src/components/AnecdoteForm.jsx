import { createAnecdote } from "../requests"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useContext } from "react"
import NotificationContext from "../contexts/notificationContext"

const AnecdoteForm = () => {
  const { setNotification } = useContext(NotificationContext)

  const queryClient = useQueryClient()
  
  const newAnecdoteMutation = useMutation({ 
    mutationFn: createAnecdote,
    onSuccess: (newAnecdote) => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
      setNotification(`you created '${newAnecdote.content}'`)
    },
    onError: (error) => {
      setNotification(`anecdote creation failed: ${error.response.data.error}`)
    }})

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate(content)
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={addAnecdote}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
