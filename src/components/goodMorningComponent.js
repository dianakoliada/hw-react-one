import React from "react";

const GoodMorningComponent = (props) => {
    console.log(props);
    return (
        <React.Fragment>
            <h4>User, {props.message}</h4>
            <p>{props.children}</p>
            <p>Have a nice day</p>
        </React.Fragment>
    );
};

export default GoodMorningComponent;