import { useEffect, useState } from "react";

//4 custom hooks;

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [error, setError] = useState(false);
    
    //5 refatorando o post
    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            });
            setMethod(method);
        }
    };

    useEffect(() => {
        const httpRequest = async () => {
            if (method === "POST") {
                let fetchOptions = [url, config];
                const res = await fetch(...fetchOptions);
                const json = await res.json();
                setCallFetch(json);
            }
        };
        httpRequest();
    }, [config, method, url]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const responseUrl = await fetch(url);
                const json = await responseUrl.json();
                setData(json);
                
            } catch (error) {
                setErrorMessage("Houve um erro: " + error.message);
                setError(true);
            }
            setLoading(false);
        };
        fetchData();
    }, [url, callFetch]);

    return [data, httpConfig, loading, error, errorMessage];
};
