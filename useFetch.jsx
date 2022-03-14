
import React, { useState, useEffect } from "react";
const useFetch = (url, options) => {
    const [res, setRes] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const abort = new AbortController();
        const signal = abort.signal;
        const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch(url, options);
            const json = await res.json();
            if (!signal.aborted) {
                setRes(json);
            }
            } catch (e) {
                if (!signal.aborted) {
                    setError(e);
            }
            } finally {
                if (!signal.aborted) {
                    setLoading(false);
                    }
                    }
                    };
                    fetchData();
                return () => {
                    abort.abort();
                };
                }, []);
                return { response, error, loading };
                };
export default useFetch;