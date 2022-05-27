import Card from './shared/Card'

function FeedbackItem({ item }) {
  return (
    <Card>
      <div className='number'>{item.rating}</div>
      <div className='text'>{item.text}</div>
      <div className='time'>{item.time}</div>
    </Card>
  )
}

export default FeedbackItem
