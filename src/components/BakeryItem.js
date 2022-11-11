import React from 'react'
import './BakeryItem.css'

export default function BakeryItem({ item, addItem }) {
  // console.log(item)
  return (
    <div className="item">
      <div className="item-image">
        <img src={item.image} alt="" />
      </div>
      <div className="item-text">
        <h1>{item.name}</h1>
        <h2>{item.price}</h2>
        <p>{item.description}</p>
        <button className="add" onClick={() => addItem(item)}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
