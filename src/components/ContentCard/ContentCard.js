import React from 'react';

const ContentCard = (props) => {
	return (
		<div className="main-nasa-wrapper">
        
			<div className="nasa-img-ctnr">
                <h2>{props.title}</h2>
				<img src={props.url} alt="nasa astronomy pic of the day" />

				<div className="image-date">
					{/* props date */}
					<h4>Date: {props.date}</h4>
					<p>&copy; {props.copyright}</p>
				</div>
                </div> {/** end nasa-img-ctnr */}
                <div className="explanation-text-ctnr">
						{/* props explanation text */}
						<p className="explanation-text">{props.explanation}</p>
					</div>
			
		</div>
	);
};

export default ContentCard;
