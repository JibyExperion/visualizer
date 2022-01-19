import { useState } from "react";


const useApi = (apiFunc) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async (...args) => {
        try {
            setLoading(true);
            const response = await apiFunc(...args);
            setLoading(false);
            setData(response.data);
            return response;
        } catch (error) {
            setError(true);
            setLoading(false);
            (error.response && error.response.statusText) ?
               console.log(error.response.statusText) : console.log("Sorry, something went wrong.");
        }
    };

    return { data, error, loading, request };
};

export default useApi;