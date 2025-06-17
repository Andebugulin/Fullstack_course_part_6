import { createSlice } from '@reduxjs/toolkit'

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
    newAnecdote(state, action) {
      state.push(action.payload)
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

export const { voteAnecdote, newAnecdote, appendAnecdote, setAnecdotes} = anecdotesSlice.actions
export default anecdotesSlice.reducer