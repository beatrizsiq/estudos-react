import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";

import { Text, Center, Box } from "@chakra-ui/react";

const About = () => {
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
                        <Text as="samp">About</Text>
                    </Center>
                    <Center p={4}>
                        <Text fontSize={20}>Valor do contador: {counter}</Text>
                    </Center>
                </Box>
            </Center>
        </div>
    );
};

export default About;
