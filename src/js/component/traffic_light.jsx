import React from "react";
import "../../styles/index.css"

//create your first component
const TrafficLight = () => {
	return (
		<div className="container-fluid d-flex vh-100 align-items-center justify-content-center">
			
			<div className="traffic-pole container d-flex align-items-center bg-dark">
				<div className="traffic-lights">
					<div className="light red bg-danger my-3">
						&nbsp;
					</div>

					<div className="light yellow bg-warning my-3">
						&nbsp;
					</div>

					<div className="light green bg-success my-3">
						&nbsp;
					</div>
				</div>
				
			</div>
		</div>
	);
};

export default TrafficLight;
