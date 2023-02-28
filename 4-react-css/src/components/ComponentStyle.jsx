import React from 'react'
import "../style/ComponentStyle.css"
const ComponentStyle = () => {
  return (
    <div>
        <h1>CSS de Componente</h1>
        <p>Parágrafo do Componente</p>
        <p className="compParagrafo">
          Parágrafo do Componente com className 
        </p>
    </div>
  )
}

export default ComponentStyle