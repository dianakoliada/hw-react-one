import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './counter.css';

const Counter = (props) => {
    const [count, setCount] = useState(0);
    console.log(props);

    const onClickHandlerNext = () => {
        console.log("You clicked next", count);
        setCount(count + 1);
        return;
    };

    const onClickHandlerPrev = () => {
        console.log("You clicked prev", count);
        setCount(count - 1);
        return;
    };

    return (
        <React.Fragment>
            <Button class="btn" variant="outline-secondary" onClick={onClickHandlerPrev}>Prev</Button>
            <Button class="btn" variant="outline-secondary" onClick={onClickHandlerNext}>Next</Button>
            <p>Count: {count}</p>
        </React.Fragment>
    );
};

export default Counter;