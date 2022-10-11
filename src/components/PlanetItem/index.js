// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, description, imageUrl} = planetDetails
  return (
    <div className="item-container">
      <img src={imageUrl} alt={`planet ${name}`} className="img-1" />
      <h1 className="i-h-1">{name}</h1>
      <p className="i-p-1">{description}</p>
    </div>
  )
}

export default PlanetItem
