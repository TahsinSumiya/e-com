import React from 'react'
import Navbar from '../component/Navbar'
import Announcement from '../component/Announcement'
import Slider from '../component/Slider'
import Descrition1 from '../component/Descrition1'
import Categories from '../component/Categories'

export default function Home() {
  return (
    <>
    <Announcement/>
      <Navbar/>
      <Slider/>
      <Descrition1/>
      <Categories/>
    </>
  )
}
