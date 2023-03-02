import styles from '../style/Cars.module.css'

const Cars = ({ marca, valor, cor, km, novo }) => {
    return (
        <div style={{ backgroundColor: '#' + cor }}>
            <div className={styles.carStyle}>
                <ul>
                    <li>Marca: {marca}</li>
                    <li>Valor: {valor}</li>
                    <li>Km: {km}</li>
                    <li>Novo: {novo}</li>
                </ul>
            </div>
        </div>
    )
}

export default Cars