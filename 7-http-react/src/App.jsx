import "./App.css";
import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch"; //4- custom hooks

const url = "http://localhost:3000/products";

function App() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);

    const [items, httpConfig, loading, error, errorMessage] = useFetch(url);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const product = {
            name,
            price,
        };
        httpConfig(product, "POST");
        setName("");
        setPrice(0);
    };

    const handleRemove = (productId) => {
        httpConfig(productId, "DELETE");
    };

    return (
        <div className="App">
            <div className="addProduct">
                <h1>Cadastro de Produtos</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Nome do Produto:
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Preço (R$):
                            <input
                                type="number"
                                name="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value={loading ? "Aguarde" : "Adicionar"}
                            disabled={loading ? true : false}
                        />
                    </div>
                </form>
            </div>
            <div className="listProducts">
                <h2>Lista de Produtos</h2>
                {loading && <p>Carregando dados..</p>}
                {error && <p>{errorMessage}</p>}
                {!loading && (
                    <table>
                        <thead>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th></th>
                        </thead>
                        <tbody>
                            {items &&
                                items.map((product) => (
                                    <tr>
                                        <td key={product.id}>{product.name}</td>
                                        <td>R${product.price}</td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    handleRemove(product.id)
                                                }
                                            >
                                                <i class="fa-solid fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default App;
