import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faRegularHeart, faComment as faRegularComment, faShareSquare as faRegularShare, faBookmark as faRegularBookmark } from '@fortawesome/free-regular-svg-icons';

const Card = ({ user, location, imageUrl, avatarUrl }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={avatarUrl} alt={`${user} Avatar`} className="avatar" />
        <div>
          <h4>{user}</h4>
          <p>{location}</p>
        </div>
      </div>
      <img src={imageUrl} alt="Post" className="card-image" />
      <div className="card-actions">
        <div className="left-actions">
          <span className="action-icon">
            <FontAwesomeIcon icon={faRegularHeart} />
          </span>
          <span className="action-icon">
            <FontAwesomeIcon icon={faRegularComment} />
          </span>
          <span className="action-icon">
            <FontAwesomeIcon icon={faRegularShare} />
          </span>
        </div>
        <div className="right-action">
          <span className="action-icon">
            <FontAwesomeIcon icon={faRegularBookmark} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;