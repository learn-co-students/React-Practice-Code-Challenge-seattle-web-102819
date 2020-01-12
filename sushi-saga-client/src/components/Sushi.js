import React, { Fragment } from 'react'

const Sushi = (props) => {
  console.log(props)
  const {img_url, name, price, isEaten} = props.sushi
  const {onSushiEaten} = props
  const sushi = props.sushi
  console.log(name, price, isEaten)

  function handleSushiEaten(sushi) { 
    onSushiEaten(sushi)
  }

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => handleSushiEaten(sushi)}>
        {
          isEaten ?
          null :
          <img src={img_url} alt='sushi on a plate'></img>
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi

