import { useSearchParams, Link } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

const Search = () => {
    const [searchParams] = useSearchParams();
    const url = `http://localhost:3000/products?${searchParams}`; //json server ja está configurado para url deste tipo e traz os resultados
    const [items, loading, error] = useFetch(url);
    return (
        <div>
            <h1>Resultados Disponíveis</h1>
            {error && <p>{error}</p>}
            {loading && <p>{loading}</p>}

            <ul className="products">
                {items &&
                    items.map((item) => (
                        <Link
                            className="linkProduct"
                            to={`/products/${item.id}`}
                            key={item.id}
                        >
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

export default Search;
