import React from 'react';

const Card = ({ image, title, titleLink, details, height}) => {
	return (
		<div className="card">
		    <div className="card-image waves-effect waves-block waves-light">
		      	<img className='activator' src={image} height={height} alt={title} />
		    </div>
		    <div className="card-content">
		      	<span className="card-title activator grey-text text-darken-4">{title}<i className="material-icons right">more_vert</i></span>
		      	<p><a href="">{titleLink}</a></p>
		    </div>
		    <div className="card-reveal">
		      	<span className="card-title grey-text text-darken-4">{title}<i className="material-icons right">close</i></span>
		      	<p>{details}</p>
    		</div>
  		</div>
	);
};

export { Card };
