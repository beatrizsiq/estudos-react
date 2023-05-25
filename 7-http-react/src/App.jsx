import "./App.css";
import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch"; //4- custom hooks

const url = "http://localhost:3000/products";

function App() {
    const products = useFetch(url);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const product = {
            name,
            price,
        };
        //fetch com 2 parametros, 1 a url, 2 objeto contendo os dados de como será a requisição HTTP
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", //informando o conteúdo da req. que é json
            },
            body: JSON.stringify(product), //enviando o dado como json
        });
        //3 carregamento dinamico
        const addedProduct = await res.json();

        // setProducts((previousProducts) => [...previousProducts, addedProduct]);
        setName("");
        setPrice(0);
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
                        <input type="submit" value="Adicionar" />
                    </div>
                </form>
            </div>
            <div className="listProducts">
                <h2>Lista de Produtos</h2>
                <ul>
                    {products &&
                        products.map((product) => (
                            <li key={product.id}>
                                {product.name} - R${product.price}
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
