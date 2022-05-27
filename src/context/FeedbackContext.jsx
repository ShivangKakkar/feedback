import { createContext, useState } from 'react'
import FeedbackData from '../data/FeedbackSampleData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        setFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}
export default FeedbackContext
