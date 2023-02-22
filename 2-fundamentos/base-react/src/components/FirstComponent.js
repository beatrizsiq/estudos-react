import MyComponent from "./MyComponent";

const FirstComponent = () =>{
    return( // é o JSX - HTML do react
        //elemento pai, a div
        <div>
            <p className="pFirst" >My first Component.</p>
            <MyComponent/>
        </div>
    )
}

export default FirstComponent;