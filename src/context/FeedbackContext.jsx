import { createContext } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  return (
    <FeedbackContext.Provider value={{}}>{children}</FeedbackContext.Provider>
  )
}
export default FeedbackContext
