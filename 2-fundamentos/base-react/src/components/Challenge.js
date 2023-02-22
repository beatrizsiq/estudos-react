const Challenge = () => {

    let values = {
        num1: 23,
        num2: 356
    };

    // const handleSumNumbers = (num1, num2) =>{
    //     let sum = num1 + num2;
    //     console.log(sum);
    // }

    return (
        <div>
            <h4>Qual é o valor da soma entre {values.num1} + {values.num2}?</h4>
            <button onClick ={() => console.log(values.num1 + values.num2)} >Abra o console e clique aqui!</button>
        </div>
    )
}

export default Challenge