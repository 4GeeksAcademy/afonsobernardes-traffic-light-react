import React, { useState, useCallback } from "react";
import "../../styles/index.css"

const CycleButton = (props) => {

    function flickLights() {
        console.log("someName called.")
        if (props.selectedLight === "red") {
            props.changeLight("yellow");
        }
        else if (props.selectedLight === "yellow") {
            props.changeLight("green");
        }
        else if (props.selectedLight === "green" || !props.selectedLight) {
            props.changeLight("red");
        }
        console.log(props.changeLight)
        console.log(props.selectedLight)
    };

	return (

        <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-dark btn-lg" onClick={flickLights}> Change Highlight </button>
        </div>
		
	);
};

export default CycleButton;