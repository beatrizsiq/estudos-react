import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";

import { Button, Center } from "@chakra-ui/react";

const ChangeCounter = () => {
    const { counter, setCounter } = useContext(CounterContext);
    return (
        <>
            <Center>
                <Button
                    colorScheme="purple"
                    onClick={() => setCounter(counter + 1)}
                >
                    Incrementar
                </Button>
            </Center>
        </>
    );
};

export default ChangeCounter;
