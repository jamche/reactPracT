import React from 'react';

const Card = (props) => {

    const { featureImage, title,description,link} = props
        return(
            <div className="card">
                <img src={featureImage} alt="placeholder" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="." className="btn btn-primary">{link}</a>
                </div>
            </div>
        );
}

export default Card;