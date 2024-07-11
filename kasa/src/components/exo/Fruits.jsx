import React from 'react'
import Fruit from './Fruit'

function Fruits() {
    const fruits = [
        {name: "Apple", price: 10, soldOut: true},
        {name: "Mango", price: 7, soldOut: false},
        {name: "Banana", price: 2, soldOut: true},
        {name: "Orange", price: 5, soldOut: false},
        {name: "Pineapple", price: 8, soldOut: true},
    ]
  return (
    <div>
        <ul>
            {fruits.map((fruit) => (
                <Fruit 
                key={fruit.name} 
                name={fruit.name} 
                price={fruit.price}
                soldOut={fruit.soldOut} 
                />
            ))}
        </ul>
    </div>
  )
}

export default Fruits