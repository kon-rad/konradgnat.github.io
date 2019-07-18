import React from 'react';

export default ({ title, description, link, image }) => {
  return (
    <div className="mt3 mw6">
      <a target="blank" href={link} className="mb3">
        <h6>{title}</h6>
      </a>
      <div className="w100">
        <img src={image} alt="tank battalion game" className="w5 h5" />
        <div>
          <p className="tc">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}