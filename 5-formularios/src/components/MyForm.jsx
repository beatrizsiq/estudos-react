import { useState } from 'react';
import '../style/MyForm.css';

const MyForm = () => {
    //gerenciamento de dados 
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (event) => {
        // impedir recarregamento da página
        event.preventDefault(); 
        console.log("Enviando");
        console.log(name, email);
    }

    return (
        <div>
            {/* {criação de form} */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Nome:</label>
                    <input type="text" name="nameUser" placeholder="Digite seu nome" onChange={handleName} />
                </div>
                {/* {label envolvendo input (outra maneira aceitável e sugerida pela documentação)} */}
                <label>
                    <span>E-mail:</span>
                    <input
                        type="email"
                        name="emailUser"
                        id=""
                        placeholder='Digite seu e-mail'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <div>
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </div>
    )
}

export default MyForm
