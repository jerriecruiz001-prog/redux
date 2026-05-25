import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editTask, toggleTask } from '../redux/tasksSlice'

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false)
  const [description, setDescription] = useState(task.description)
  const dispatch = useDispatch()

  const handleSave = (event) => {
    event.preventDefault()

    const trimmedDescription = description.trim()
    if (!trimmedDescription) return

    dispatch(editTask({ id: task.id, description: trimmedDescription }))
    setIsEditing(false)
  }

  const handleCancel = () => {
    setDescription(task.description)
    setIsEditing(false)
  }

  return (
    <article className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-3">
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={() => dispatch(toggleTask(task.id))}
            className="mt-1 h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
          />

          {isEditing ? (
            <form onSubmit={handleSave} className="flex flex-1 flex-col gap-3">
              <input
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="min-h-11 rounded-md border border-slate-300 px-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div>
              <p
                className={`text-lg font-medium ${
                  task.isDone ? 'text-slate-400 line-through' : 'text-slate-900'
                }`}
              >
                {task.description}
              </p>
              <span
                className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                  task.isDone
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-amber-100 text-amber-700'
                }`}
              >
                {task.isDone ? 'Done' : 'Not Done'}
              </span>
            </div>
          )}
        </div>

        {!isEditing && (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Edit
          </button>
        )}
      </div>
    </article>
  )
}

export default Task
