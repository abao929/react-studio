import { useState } from 'react'
import './App.css'
import bakeryData from './assets/bakery-data.json'
import BakeryItem from './components/BakeryItem'

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + '/' + item.image
})
/* ############################################################## */
// console.log(bakeryData)
function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartItems, setCartItems] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const [open, setOpen] = useState(false)
  const addItem = (item) => {
    setCartTotal(cartTotal + item.price)
    let temp = cartItems.slice()
    temp.push(item)
    setCartItems(temp)
  }
  return (
    <div className="App">
      <div className="bar">
        <h1>Alex's Bakery</h1>
        <div
          className="cart"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <h2>Cart: {cartItems.length}</h2>
          <div className={`content ${open ? 'active' : 'hidden'}`}>
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div className="small-item">
                  <img src={item.image} alt="" />
                  <p className="small-name">{item.name}</p>
                </div>
              ))}
            </div>
            <div className="total">
              Total {Math.round(cartTotal * 100) / 100}
            </div>
            <button>Checkout</button>
          </div>
        </div>
      </div>

      <div className="items">
        {bakeryData.map((item, index) => (
          <BakeryItem item={item} addItem={addItem} />
        ))}
      </div>
    </div>
  )
}

export default App
