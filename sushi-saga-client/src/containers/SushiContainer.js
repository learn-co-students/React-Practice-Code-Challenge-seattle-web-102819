import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ( {currentSushi, onSushiEaten, onMoreSushi} ) => {
  return (
    <Fragment>
      <div className="belt">
        {
          currentSushi.map( (sushi, index) => {
            return <Sushi sushi={sushi} key={index} onSushiEaten={onSushiEaten}/>
          })
        }
        <MoreButton onMoreSushi={onMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer