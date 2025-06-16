import { createSlice } from '@reduxjs/toolkit'


const initialState = [
  {
    content: 'If it hurts, do it more often',
    id: '1',
    votes: 0
  },
  {
    content: 'Adding manpower to a late software project makes it later!',
    id: '2',
    votes: 0
  },
  {
    content: 'The first 90 percent of the code accounts for the first 90 percent of the development time. The remaining ten percent of the code accounts for the other half of the development time.',
    id: '3',
    votes: 0
  },
  {
    content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    id: '4',
    votes: 0
  },
  {
    content: 'Premature optimization is the root of all evil.',
    id: '5',
    votes: 0
  }
]
const generateId = () => Math.random().toString(36).substr(2, 9)

const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload 
      const anecdoteToVote = state.find(a => a.id === id)
      if (anecdoteToVote) {
        anecdoteToVote.votes += 1 
      }
    },
    newAnecdote(state, action) {
      const content = action.payload 
      state.push({
        content,
        id: generateId(),
        votes: 0
      })
    }
  }
})

export const { voteAnecdote, newAnecdote } = anecdotesSlice.actions
export default anecdotesSlice.reducer