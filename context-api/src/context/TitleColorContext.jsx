import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
    switch (action.type) {
        case "RED":
            return { ...state, color: "red", bgColor: "gray" };
        case "BLUE":
            return { ...state, color: "blue", bgColor: "yellow" };
        case "GREEN":
            return { ...state, color: "green", bgColor: "pink" };
        default:
            return state;
    }
};

export const TitleColorContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(titleColorReducer, {
        color: "purple",
        bgColor: "black"
    });

    return (
        <TitleColorContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TitleColorContext.Provider>
    );
};
