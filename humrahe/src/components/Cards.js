import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC destinations!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__item'>
                    <CardItem 
                    src='images/img-9.jpg'
                    text='Explore the wonders of Amazon Forest!'
                    label='Adventure'
                    path='/services'
                    />
                    <CardItem 
                    src='images/img-8.jpg'
                    text='Break Free from the hassles of daily struggle and book a trip with us to Dubai!'
                    label='Adventure'
                    path='/services'
                    />
                </ul>
                <ul className='cards__item'>
                    <CardItem 
                    src='images/img-5.jpg'
                    text='Book a trip to China!'
                    label='Adventure'
                    path='/services'
                    />
                    <CardItem 
                    src='images/img-6.jpg'
                    text='What about the weather in Hong Kong? Come Explore with us!'
                    label='Adventure'
                    path='/services'
                    />
                    <CardItem 
                    src='images/img-7.jpg'
                    text='Explore places never visited before with us!'
                    label='Adventure'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards