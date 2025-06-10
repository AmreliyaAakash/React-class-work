import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './component/card.jsx'
import productData from './produc.json'
import './component/card.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="card-container">
        {productData.map((item) => (
          <Card key={item.item_name} item={item} />
        ))}
    </div>
  </StrictMode>
)
