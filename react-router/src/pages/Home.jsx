import { Link } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

import "../style/Home.css";

const Home = () => {
    const url = "http://localhost:3000/products";
    const [items, loading, error] = useFetch(url);
    return (
        <div>
            <h1>Products</h1>
            {error && <p>{error}</p>}
            <ul className="products">
                {items &&
                    items.map((item) => (
                        <Link className='linkProduct' to={`/products/${item.id}`} key={item.id}>
                            <li>
                                <h2>{item.name}</h2>
                                <p>R$ {item.price}</p>
                            </li>
                        </Link>
                    ))}
            </ul>
        </div>
    );
};

export default Home;
