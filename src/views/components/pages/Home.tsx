import React from 'react'

import Map from '../../ui/Map'
import Header from '../../ui/Header'
import HomeButtons from '../../ui/HomeButtons'


const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Map />
      <HomeButtons/> 
    </>
  )
}

export default Home