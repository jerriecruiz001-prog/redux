import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../redux/tasksSlice'
import Task from './Task'

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Done', value: 'done' },
  { label: 'Not Done', value: 'notDone' },
]

function ListTask() {
  const dispatch = useDispatch()
  const { tasks, filter } = useSelector((state) => state.tasks)

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone
    if (filter === 'notDone') return !task.isDone
    return true
  })

  return (
    <section>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold">Tasks</h2>
        <div className="flex rounded-md border border-slate-300 bg-slate-50 p-1">
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => dispatch(setFilter(item.value))}
              className={`rounded px-3 py-2 text-sm font-medium transition ${
                filter === item.value
                  ? 'bg-emerald-600 text-white'
                  : 'text-slate-600 hover:bg-white hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {filteredTasks.length > 0 ? (
        <div className="space-y-3">
          {filteredTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      ) : (
        <p className="rounded-md border border-dashed border-slate-300 p-6 text-center text-slate-500">
          No tasks match this filter.
        </p>
      )}
    </section>
  )
}

export default ListTask
