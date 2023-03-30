import './App.css';
import { useState, useEffect } from "react";

const url = "http://localhost:3000/products";

function App() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    //1 - resgatando dados
    const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    // 2 - Adição de produtos

    const handleSubmit = async (e) => {
        e.preventDefault();

        const product = {
            name,
            price
        }
        //fetch com 2 parametros, 1 a url, 2 objeto contendo os dados de como será a requisição HTTP
        const res = await fetch(url, {
            method:"POST", 
            headers:{ //Cabeçalho da req.
                "Content-Type": "application/json" //informando o conteúdo da req. que é json
            },
            //corpo da req.
            body: JSON.stringify(product),//enviando o dado como json
        })
    }

    return (
        <div className="App">
            <div className='listProducts'>
                <h1>Lista de Produtos</h1>
                <ul>
                    {
                        products.map((product) => (
                            <li key={product.id}>
                                {product.name} -  R${product.price}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='addProduct'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Nome do Produto:
                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Preço (R$):
                            <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Adicionar" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
