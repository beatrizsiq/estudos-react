import { useCounterContext } from "../hooks/useCounterContext";

import { Text, Center, Box } from "@chakra-ui/react";

const Products = () => {
    const boxStyles = {
        bgGradient: "linear(to-l, #FFFF, #f4f1de)",
        w: "50%",
        h: "100%",
        p: "4",
        color: "#343a40",
        borderRadius: "5",
    };
    const { counter } = useCounterContext();
    return (
        <div>
            <Center>
                <Box {...boxStyles}>
                    <Center>
                        <Text as="samp">Products</Text>
                    </Center>
                    <Center p={4}>
                        <Text fontSize={20}>Valor do contador: {counter}</Text>
                    </Center>
                </Box>
            </Center>
        </div>
    );
};

export default Products;
