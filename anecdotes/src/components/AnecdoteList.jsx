import { useSelector, useDispatch  } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()

    const filter = useSelector(state => state.filter)

    const vote = (id) => {
    dispatch(voteAnecdote(id))
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
