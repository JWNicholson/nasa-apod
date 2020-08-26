import React from 'react';

const ContentCard = (props) => {
	return (
		<div className="main-nasa-wrapper">
			<div className="image-title">
				{/* props image title */}
				<h2>{props.title}</h2>
			</div>
			<div className="nasa-img-ctnr">
				<img src={props.url} alt="nasa astronomy pic of the day" />

				<div className="image-date">
					{/* props date */}
					<h4>Date: {props.date}</h4>
					<div className="explanation-text">
						{/* props explanation text */}
						<p>{props.explanation}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContentCard;
