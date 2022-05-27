import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { FeedbackProvider } from './context/FeedbackContext'
import './index.css'
import FeedbackList from './components/FeedbackList'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'

function App() {
  return (
    <FeedbackProvider>
      <Header />

      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </FeedbackProvider>
  )
}

export default App
