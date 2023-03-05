import React from "react";
// один через пропс а второй как чайлд (тоже из пропс)

const GoodAfternoonComponent = (props) => {
    console.log(props);
    return (
        <h4>User, {props.text}</h4>
    );
};

export default GoodAfternoonComponent;
