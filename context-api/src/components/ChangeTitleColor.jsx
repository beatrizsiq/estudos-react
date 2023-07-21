import { Select, Center } from "@chakra-ui/react";

import { useTitleColorContext } from "../hooks/useTitleColorContext";

import { useState } from "react";

const ChangeTitleColor = () => {
    const [selectedOption, setSelectedOption] = useState();
    const { color, dispatch } = useTitleColorContext();

    const setTitleColor = (color) => {
        dispatch({ type: color });
    };

    const handleSelectOption = (event) => {
        const option = event.target.value;
        setSelectedOption(option);
        setTitleColor(option);
    };

    return (
        <>
            <Center>
                <Select
                    placeholder="Altere a cor"
                    value={selectedOption}
                    onChange={handleSelectOption}
                >
                    <option value="RED">Vermelho</option>
                    <option value="BLUE">Azul</option>
                    <option value="GREEN">Verde</option>
                </Select>
            </Center>
        </>
    );
};

export default ChangeTitleColor;
