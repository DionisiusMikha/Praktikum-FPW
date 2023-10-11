import Navbar from './components/navbar'
import Icon from './components/icon'
import React from 'react'
import CatalogSection from './components/CatalogSection'
import Product from './assets/products.json'

function App() {
  console.log(Product)
  return (
    <>
    <Navbar />
    <div className="jumbo">
      <img src="banner.jpg" alt=""/>
    </div>
    <Icon />
    <hr />
    <CatalogSection product={Product.products}/>

    </>
  )

}

export default App
