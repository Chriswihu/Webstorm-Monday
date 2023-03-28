import {useEffect,useRef, useState} from 'react';

function UseRefPreState(props) {

    const [inputValue,setInputValue] = useState();
    const preValue = useRef();

    useEffect(()=>{
        preValue.current = inputValue;
    },[inputValue]);

    return (
        <div>
            <input type="text"
            defaultValue={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            />

            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {preValue.current}</h2>


        </div>
    );
}

export default UseRefPreState;