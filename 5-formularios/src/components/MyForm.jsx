import { useState } from 'react';
import '../style/MyForm.css';

const MyForm = ({ user }) => {
    //gerenciamento de dados 
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');
    const [occupation, setOccupation] = useState(user ? user.occupation : '');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (event) => {
        // impedir recarregamento da página
        event.preventDefault();
        console.log("Enviando");
        console.log(name, email, bio, occupation);

        //limpar formulário
        setName("");
        setEmail("");
    }

    return (
        <div>
            {/* {criação de form} */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Nome:</label>
                    <input
                        type="text"
                        name="nameUser"
                        placeholder="Digite seu nome"
                        onChange={handleName}
                        value={name} />
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
                        value={email}
                    />
                </label>
                <label>
                    <span>Descrição sobre você:</span>
                    <textarea
                        name="bio"
                        placeholder='Diga um pouco sobre você'
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}></textarea>
                </label>
                <label>
                    <span>Função no sistema:</span>
                    <select name="occupation" onChange={(e)=>setOccupation(e.target.value)} value={occupation}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <div>
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </div>
    )
}

export default MyForm
