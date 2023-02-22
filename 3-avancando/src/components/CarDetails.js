const CarDetails = ({ brand, km, color, newCar }) => {
    return (
        <div>
            <h3>Detalhes do carro</h3>
            <div>
                <ul>
                    <li>Marca: {brand}</li>
                    <li>KM: {km}</li>
                    <li>Cor: {color}</li>
                </ul>
            </div>
            {newCar ? <p>Este carro é novo</p> : <p>Este carro é usado</p>}
        </div>
    )
}

export default CarDetails