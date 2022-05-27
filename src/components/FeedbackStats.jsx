import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)
  const average = feedback.reduce((a, b) => a + b.rating, 0) / 3

  return (
    <div className='container stats'>
      <p>
        {feedback.length} {feedback.length === 1 ? `Review` : `Reviews`}
      </p>
      <p>Average Rating: {average}</p>
    </div>
  )
}
export default FeedbackStats
