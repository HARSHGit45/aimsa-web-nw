

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/header/Header.jsx'
import { slides } from './data/carouselData.json'
import { Carousel } from './component/crousel/Carousel.jsx'


function App() {
  

  return (
    
   <div>

<BrowserRouter>


<Header />

< Carousel data={slides} />




<Routes>






</Routes>
</BrowserRouter>

   </div>
  )
}

export default App
