import { useCounterContext } from "../hooks/useCounterContext";

import { Text, Center, Box } from "@chakra-ui/react";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {
    const boxStyles = {
        bgGradient: "linear(to-l, #FFFF, #f4f1de)",
        w: "50%",
        h: "100%",
        p: "4",
        color: "#343a40",
        borderRadius: "5",
    };
    const { counter } = useCounterContext();
    const {color } = useTitleColorContext();

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
                    <Center p={4}>
                        <Text fontSize={20} color={color}>Cor do título: {color}</Text>
                    </Center>
                </Box>
            </Center>
        </div>
    );
};

export default About;
