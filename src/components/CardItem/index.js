// Write your code here.
import './index.css'
const CardItem = props => {
  const {cardDetails} = props
  const {id, title, description, imgUrl, className} = cardDetails
  const imgElement = className + '1'
  console.log(imgElement)
  return (
    <li className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className={imgElement}>
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
