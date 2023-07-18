import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

const Product = () => {
    const { id } = useParams();
    const url = "http://localhost:3000/products/" + id;

    const [product, loading, error] = useFetch(url);

    return (
        <div>
            {error && <p>{error}</p>}
            {loading && <p>Carregando</p>}
            {product && (
                <div>
                    <h2>{product.name}</h2>
                    <p>R$ {product.price}</p>
                    <Link to={`/products/${product.id}/info`}>Mais informações</Link>
                </div>
            )}
        </div>
    );
};

export default Product;
