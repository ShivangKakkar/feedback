import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { FeedbackProvider } from './context/FeedbackContext'
import './index.css'

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
                <div className='container'>App</div>
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </FeedbackProvider>
  )
}

export default App
