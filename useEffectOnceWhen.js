export function useEffectOnceWhen(condition, func, deps) {
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
    }, [...deps]); 
}
