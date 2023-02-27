const ShowUserName = (props) => {
  return (
    <div>
      <h2>O nome do usuário é: {props.name}</h2>
      <h3>O nome do outro  usuário é: {props.secName}</h3>
    </div>
  )
}

export default ShowUserName