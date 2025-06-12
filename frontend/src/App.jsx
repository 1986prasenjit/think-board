import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import CreateNotePage from './pages/CreateNotePage'
import NoteDetailsPage from './pages/NoteDetailsPage'
import toast from 'react-hot-toast'

function App() {

  return (
    <div data-theme="coffee">
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/create-note'
          element={<CreateNotePage />}
        />
        <Route
          path='/note/:id'
          element={<NoteDetailsPage />}
        />
      </Routes>
    </div>
  )
}

export default App
