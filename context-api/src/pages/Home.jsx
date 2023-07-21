import ChangeCounter from "../components/ChangeCounter";

import { Text, Center, Box } from "@chakra-ui/react";

import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";
import ChangeTitleColor from "../components/ChangeTitleColor";

const Home = () => {
    const boxStyles = {
        bgGradient: "linear(to-l, #FFFF, #f4f1de)",
        w: "50%",
        h: "100%",
        p: "4",
        color: "#343a40",
        borderRadius: "5",
    };

    const { counter } = useCounterContext();
    const { color, bgColor } = useTitleColorContext();

    return (
        <div>
            <Center>
                <Box {...boxStyles}>
                    <Center>
                        <Text as="samp">Home</Text>
                    </Center>
                    <Center p={4}>
                        <Text fontSize={20}>Valor do contador: {counter}</Text>
                    </Center>
                    <ChangeCounter />
                </Box>
            </Center>
            <Center>
                <Box {...boxStyles}>
                    <Center p={4}>
                        <Text fontSize={25} color={color} bg={bgColor}>
                            Estado do TitleColorContext
                        </Text>
                    </Center>
                    <ChangeTitleColor />
                </Box>
            </Center>
        </div>
    );
};

export default Home;
