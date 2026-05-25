import './App.css'
import Addtask from './componenet/Addtask'
import ListTask from './componenet/ListTask'

function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
      <section className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-sm">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
            Redux Checkpoint
          </p>
          <h1 className="mt-2 text-3xl font-bold">Todo Application</h1>
        </div>

        <Addtask />
        <ListTask />
      </section>
    </main>
  )
}

export default App
