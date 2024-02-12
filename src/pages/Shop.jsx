import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popula from '../Components/Popular/Popula'
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollection/NewCollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Fotter from '../Components/Fotter/Fotter'


export default function Shop() {
  return (
    <div>
      <Hero/>
      <Popula/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
      {/* <Fotter/> */}
    </div>
  )
}
