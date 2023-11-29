import styles from "./Home.module.css";
import HookUseState from "../../components/useState/HookUseState";
import HookUseReducer from "../../components/useReducer/HookUseReducer";

const Home = () => {
    return (
        <div className={styles.home}>
            <h1>Home</h1>
            <hr />
            <HookUseState />
            <hr />
            <HookUseReducer />
        </div>
    );
};

export default Home;
