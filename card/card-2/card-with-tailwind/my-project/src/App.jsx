import React from 'react'
import Card from './component/card'
import './App.css'
import productData from './component/product.json'
function App() {


  return (
    <>

      <div className="flex flex-wrap justify-center items-center p-4 bg-gray-100 min-h-screen ">
        {productData.map((item) => (
          <Card key={item.item_name} item={item} />
        ))}
      </div>

    </>
  )
}

export default App
