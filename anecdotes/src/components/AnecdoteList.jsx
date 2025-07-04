import { useSelector, useDispatch  } from 'react-redux'
import { voteAnecdoteAsync } from '../reducers/anecdoteReducer'
import { setNotificationTimeout } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const vote = (id) => {
        const anecdote = anecdotes.find(a => a.id === id)
        dispatch(voteAnecdoteAsync(id))
        dispatch(setNotificationTimeout(`You voted '${anecdote.content}'`, 10))
    }


    const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)
    const filteredAnecdotes = sortedAnecdotes.filter(anecdote =>
        anecdote.content.toLowerCase().includes(filter.toLowerCase())
    )

    return (
    <div>
        {filteredAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
            <div>
            {anecdote.content}
            </div>
            <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
        </div>
        )}
    </div>
    )
}

export default AnecdoteList
