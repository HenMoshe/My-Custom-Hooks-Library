import { useRef, useEffect } from 'react'

function usePrevVal(prev){
  const prevVal = useRef();
  useEffect(()=> {
           prevVal.current = prev; 
            });
  return prevVal.current;
}
export default usePrevVal;
