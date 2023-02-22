import { useState } from 'react'

const ListRender = () => {
    const [listNames] = useState(["Matheus", "Beatriz", "João"]); //array sem key (id) explícito -maneira "incorreta"

    const [listUsers, setUser] = useState([
        { id: 1, name: "Beatriz", age: 21 },
        { id: 2, name: "Matheus", age: 8 },
        { id: 3, name: "João", age: 23 },
    ]); //array com key (id) explícito - maneira correta 

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4); // trará um valor de zero à três

        setUser((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }
    return (
        <div>
            <ul>
                {
                    listNames.map((names, id) => ( //react solicita uma key para cada item iterado
                        <li key={id}>{names}</li>
                    ))
                }
            </ul>
            <ul>
                {
                    listUsers.map((user) => (
                        <li key={user.id}> {user.name} - {user.age}</li>
                    ))
                }
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender