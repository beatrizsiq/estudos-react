const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);
    };
    const renderCode = (x) => {
        if (x) {
            return <h1>Renderizando isso!!</h1>;
        } else {
            return <h1>Também isso!!</h1>
        }
    }
    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log('clicou')}> Clique aqui também</button>
            </div>
            <div>
                <button onClick={() => {
                    if (true) {
                        console.log("Isso não deveria existir!!");
                    }
                }}> Clique aqui também, por favor</button>
            </div>
            <div>
                {renderCode(true)}
                {renderCode(false)}
            </div>
        </div >
    )
}

export default Events