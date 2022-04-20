export function useEffectOnceWhen(condition, func) {
    const [finished, setFinished] = useState(false);
    useEffect(() => {
        if (finished) {
            return;
        }
        if (!condition) {
            return;
        }
        setFinished(true);
        func();
    }, [func, condition, finished, setFinished]); 
}
