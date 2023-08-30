import React, { useState } from "react";
import "../../styles/index.css"

//create your first component
const TrafficLight = () => {

	const [ highlight, setHighlight ] = useState("");

	return (
		<div className="container-fluid d-flex vh-100 align-items-center justify-content-center">
			
			<div className="traffic-pole container d-flex align-items-center bg-dark">
				<div className="traffic-lights">
					<div className={`light red bg-danger my-3 ${highlight === "red" ? "selected" : ""}`} onClick={() => setHighlight("red")}>
						&nbsp;
					</div>

					<div className={`light yellow bg-warning my-3 ${highlight === "yellow" ? "selected" : ""}`} onClick={() => setHighlight("yellow")}>
						&nbsp;
					</div>

					<div className={`light green bg-success my-3 ${highlight === "green" ? "selected" : ""}`} onClick={() => setHighlight("green")}>
						&nbsp;
					</div>
				</div>
				
			</div>
		</div>
	);
};

export default TrafficLight;
