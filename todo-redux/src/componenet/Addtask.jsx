import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/tasksSlice'

function Addtask() {
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedDescription = description.trim()
    if (!trimmedDescription) return

    dispatch(addTask(trimmedDescription))
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8 flex flex-col gap-3 sm:flex-row">
      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Add a new task"
        className="min-h-12 flex-1 rounded-md border border-slate-300 px-4 text-base outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
      />
      <button
        type="submit"
        className="min-h-12 rounded-md bg-emerald-600 px-6 font-semibold text-white transition hover:bg-emerald-700"
      >
        Add Task
      </button>
    </form>
  )
}

export default Addtask
