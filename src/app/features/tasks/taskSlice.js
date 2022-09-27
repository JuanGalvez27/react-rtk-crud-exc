import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false
  },
  {
    id: "2",
    title: "task 2",
    description: "task 2 description",
    completed: false
  }
]

export const tasksSlice = createSlice({


  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      console.log(state, action)
      state.push(action.payload)
    },
    deleteTask: (state, action) => {
      const taskFound = state.find(task => task.id === action.payload)
      if(taskFound){
        state.splice(state.indexOf(taskFound), 1)
      }
    }
  }
})

export const { addTask,deleteTask } = tasksSlice.actions

export default tasksSlice.reducer