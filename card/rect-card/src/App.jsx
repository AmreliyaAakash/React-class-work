import Card from './card.jsx'
import './card.css'
import React from 'react'
import Counter from './components/Counter.jsx'

function App() {
  return (
    <div>
      <Card
        title="Panther Statue"
        image="https://fbi.cults3d.com/uploaders/25952614/illustration-file/4e2c0332-3ceb-4d64-8475-34cd0cf04fee/large_display_REFERENCE_1.webp"
        price="$2.1m"
        description="Grand prize in Cayo Perico heist in GTA5 Online"
      />
      <Counter />
    </div>
  )
}

export default App
