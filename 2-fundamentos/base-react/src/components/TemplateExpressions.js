const TemplateExpressions = () => {

    let name = 'Beatriz';
    let data = {
        age: 21,
        job: 'Programadora Web'
    }
    return(
        <div>
            <h4>Olá, me chamo {name} </h4>
            <h4>Tenho {data.age} anos  e trabalho como {data.job}</h4>
        </div>
    )
}

export default TemplateExpressions;