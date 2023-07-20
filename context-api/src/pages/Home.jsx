import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";

import ChangeCounter from "../components/ChangeCounter";

import { Text, Center, Box } from "@chakra-ui/react";

const Home = () => {
    const boxStyles = {
        bgGradient: "linear(to-l, #FFFF, #f4f1de)",
        w: "50%",
        h: "100%",
        p: "4",
        color: "#343a40",
        borderRadius: "5",
    };
    const { counter } = useContext(CounterContext);
    return (
        <div>
            <Center>
                <Box {...boxStyles}>
                    <Center>
                        <Text as='samp'>
                            Home
                        </Text>
                    </Center>
                    <Center p={4}>
                        <Text fontSize={20}>Valor do contador: {counter}</Text>
                    </Center>
                    <ChangeCounter />
                </Box>
            </Center>
        </div>
    );
};

export default Home;
