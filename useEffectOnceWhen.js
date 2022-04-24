import { useEffect, useRef } from "react";

export function useEffectOnceWhen(func, condition) {
    const isExecuted = useRef(false); // used to determine whether `func` was executed or not

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

/*
Example for usage:

export function SomeExample() {
    const [condition,setCondition] = useState(false);
    const [dep,setDep] = useState(false);

    useEffectOnceWhen(() => {
        setDep(true);
    },condition)
    return <div>
        <button onClick={() => setCondition(true)}>Check if it's working</button>
        flag: ${dep.toString()}
    </div>
}


*/