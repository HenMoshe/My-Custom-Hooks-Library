export function useEffectOnceWhen(condition, func) {
    const isExecuted = useRef(false);

    useEffect(() => {
        if (isExecuted.current) {
            return;
        }
        if (!condition) {
            return;
        }
        isExecuted.current = true;
        func();
    },[condition]); 
}

