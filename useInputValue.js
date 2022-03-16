import { useState } from 'react';
function useInputValue(initValue){
    const [value, setValue] = useState(initValue);
    const resetInput = () => {
        setValue(initValue);
    }
    const bind = {
        value,
        onChange: e => {
            e.target.value
        }
    };
    return [value, bind, resetInput];
}
export default useInputValue
