import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  tasks: [
    {
      id: 'task-1',
      description: 'Learn Redux global state',
      isDone: false,
    },
    {
      id: 'task-2',
      description: 'Build the todo checkpoint',
      isDone: true,
    },
  ],
  filter: 'all',
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.tasks.unshift(action.payload)
      },
      prepare: (description) => ({
        payload: {
          id: nanoid(),
          description,
          isDone: false,
        },
      }),
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((item) => item.id === action.payload)

      if (task) {
        task.isDone = !task.isDone
      }
    },
    editTask: (state, action) => {
      const { id, description } = action.payload
      const task = state.tasks.find((item) => item.id === id)

      if (task) {
        task.description = description
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    },
  },
})

export const { addTask, toggleTask, editTask, setFilter } = tasksSlice.actions
export default tasksSlice.reducer
