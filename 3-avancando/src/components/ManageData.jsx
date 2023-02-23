import { useState } from "react";

const ManageData = () => {
    let num = 10;

    const [number, setNumber] = useState(num);

  return (
    <div>
        <p>Valor: {number}</p>
        <button onClick={() => (setNumber(10))}>Acrescentar 1</button>
    </div>
  )
}

export default ManageData