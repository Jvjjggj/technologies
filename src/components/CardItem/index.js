// Write your code here.
import './index.css'
const CardItem = props => {
  const {cardDetails} = props
  const {id, title, description, imgUrl, className} = cardDetails
  return (
    <div className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} alt="img" />
    </div>
  )
}

export default CardItem
