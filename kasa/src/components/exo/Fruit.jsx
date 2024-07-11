import React, { Fragment } from 'react'

function Fruit({ name, price, soldOut }) {
  return (
    <>
      <li>
        {name} ${price} {soldOut ? "Sold out" : ""}
      </li>
    </>
  )
}

export default Fruit