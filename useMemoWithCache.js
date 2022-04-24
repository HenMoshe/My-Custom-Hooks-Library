import { useEffect, useRef, useState } from "react";

export default function useMemoWithCache(fnc, dependencies) {
    const [result, setResult] = useState(null);
    const cache = useRef({});

    useEffect(() => {
        const stringifiedDeps = dependencies.join();

        if (cache[stringifiedDeps])
            setResult(cache[stringifiedDeps]);
        else {
            const tempResult = fnc();
            cache[stringifiedDeps] = tempResult;
            setResult(tempResult);
        }
    }, dependencies)
    
    return result;
}

/*

Example:

export default function Sample() {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);


    const expensiveFunction = (a, b) => {
        console.log('very expensive operation was made');
        return a + b;
    }
    const result = useMemoWithCache(
        () => expensiveFunction(firstNumber,secondNumber),
        [firstNumber,secondNumber]
    )

    return (
        <>
            <input type="number" onChange={(e) => setFirstNumber(+e.target.value)}></input>
            <input type="number" onChange={(e) => setSecondNumber(+e.target.value)}></input>
            <span>Result is:{result}</span>
        </>
    )
}

*/
