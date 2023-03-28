import React, {useState} from 'react';
import PropTypes from 'prop-types';

Counter.propTypes = {};

function Counter(props) {
    const [count, setCount] = useState(0);

    const clickAddHandler = () => {
        setCount(count + 1);
    }
    const clickRemoveHandler = () => {
        setCount(count - 1);
    }
    const clickResetHandler = () => {
        setCount(0);
    }
    return (
        <div>
            Count: {count}
            <button onClick={clickAddHandler}>Add</button>
            <button onClick={clickRemoveHandler}>Remove</button>
            <button onClick={clickResetHandler}>Reset</button>
        </div>
    );
}

export default Counter;