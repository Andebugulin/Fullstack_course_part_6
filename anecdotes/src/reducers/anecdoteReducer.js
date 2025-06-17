import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload 
      const anecdoteToVote = state.find(a => a.id === id)
      if (anecdoteToVote) {
        anecdoteToVote.votes += 1 
      }
    },
    appendAnecdote(state, action) {
      const newAnecdote = action.payload
      state.push(newAnecdote)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll() 
    dispatch(setAnecdotes(anecdotes))
  }
}

export const newAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdoteAsync = id => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.voteAnecdote(id)
    dispatch(voteAnecdote(updatedAnecdote.id))
  }
}

export const { voteAnecdote, appendAnecdote, setAnecdotes} = anecdotesSlice.actions
export default anecdotesSlice.reducer