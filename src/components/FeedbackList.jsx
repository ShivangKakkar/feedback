import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import FeedbackItem from './FeedbackItem'

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext)

  return (
    <div>
      <ul>
        {feedback.map((item) => (
          <FeedbackItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default FeedbackList
