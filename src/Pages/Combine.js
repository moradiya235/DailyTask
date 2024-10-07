import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Productlist from '../Combine/Productlist'
import CartPage from '../Combine/CartPage'
import CheckoutPage from '../Combine/CheckoutPage'
import { CartProvider } from '../Combine/CartContext'
import Socialmedia from '../Combine/Socialmedia'
import Quiz from '../Combine/QuizReducer'
import DrawingCanvas from '../Combine/Drawing'
import TaskSchedule from '../Combine/TaskSchedule'

const Combine = () => {
    return (
        <div>
            {/* <CartProvider>
                <Productlist />
                <CartPage />
                <CheckoutPage />
            </CartProvider> */}

            <Socialmedia/>
            

                {/* <Quiz/> */}

                {/* <DrawingCanvas/> */}

                {/* <TaskSchedule/> */}

            
        


            

        </div>
    )
}

export default Combine
