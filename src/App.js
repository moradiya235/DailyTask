import React, { createContext } from 'react'
import Counter from './Task1/Counter'
import Password from './Task1/Password'
import Formtable from './Task1/Formtable'
import Loginform from './Task1/Loginform'
import Screenmode from './Task1/Screenmode'
import Likecount from './Task1/Likecount'
import Todolist from './Task1/Todolist'
import Charcount from './Task1/Charcount'
import Timer from './Task1/Timer'
import Shoppingcart from './Task1/Shoppingcart'
import Apidata from './Task1/Apidata'
import Windows from './Task1/Windows'
import Watchtimer from './Task1/Watchtimer'
import Thememode from './Task1/Thememode'
import Searching from './Task1/Searching'
import Pollingdata from './Task1/Pollingdata'
import Countdown from './Task1/Countdown'
import Location from './Task1/Location'
import Lazyload from './Task1/Lazyload'
import Online from './Task1/Online'
import Task1 from './Pages/Task1'
import Task2 from './Pages/Task2'
import Usecontext from './Pages/Usecontext'
import Notification from './Usecontext/Notification'
import Combine from './Pages/Combine'
import { CartProvider } from './Combine/CartContext'
import Productlist from './Combine/Productlist'
import CartPage from './Combine/CartPage'
import CheckoutPage from './Combine/CheckoutPage'
import Formtask from './Pages/Formtask'

export const data = createContext()
const App = () => {

  function global() {
    alert("notification success...")
  }

  return (
    <div>
      {/* <Task1/> */}
      {/* <Task2/> */}
      {/* <Usecontext /> */}
      {/* <data.Provider value={global}>
         <Notification />
      </data.Provider> */}
      
      {/* <Combine /> */}
      <Formtask/>
      
    </div>
  )
}

export default App

