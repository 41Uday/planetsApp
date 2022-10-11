// Write your code here

import {Component} from 'react'

import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

class PlanetsSlider extends Component {
  render() {
    const {planetsList} = this.props
    return (
      <div className="bg-container" testid="planets">
        <h1 className="h-1">PLANETS</h1>
        <Slider>
          {planetsList.map(e => (
            <PlanetItem key={e.id} planetDetails={e} />
          ))}
        </Slider>
      </div>
    )
  }
}

export default PlanetsSlider
