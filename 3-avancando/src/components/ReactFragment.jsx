const ReactFragment = ({propFragment}) => {
  return (
    // {Fica dentro da Div do App.js}
    <> 
        <h2>Primeiro Título</h2>
        <h3>Segundo Título</h3>
        <p>{propFragment}</p>
    </>
  )
}

export default ReactFragment