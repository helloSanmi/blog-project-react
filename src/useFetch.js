import { useState, useEffect } from "react";


const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [ errMessage, setErrMessage] = useState(null);


    useEffect(()=> {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res  => {
                    if (!res.ok) {
                        throw Error('Could not fetch data');
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setIsLoading(false)
                    setErrMessage(null);
                })
                .catch((err) => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                        setIsLoading(false);
                        setErrMessage(err.message);
                    }
                })
        }, 100);

        return () => abortCont.abort()

    }, [url]);

    return { data, isLoading, errMessage }
}


export default useFetch;