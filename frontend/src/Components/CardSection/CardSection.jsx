
import React from 'react';
import Card from '../../Components/Card/Card';
import './CardSection.css';
import partyImage from '../../assets/party.jpg';
import concertImage from '../../assets/concert.jpg';
import fireworksImage from '../../assets/fireworks.jpg';
import beachImage from '../../assets/beach.jpg';
import dogImage from '../../assets/dog.jpg';
import cyclingImage from '../../assets/cycling.jpg';

const CardSection = () => {
  const posts = [
    { user: 'Rikki Jamee', location: 'Wichita, Kansas', imageUrl: partyImage },
    { user: 'Rikki Jamee', location: 'Wichita, Kansas', imageUrl: concertImage },
    { user: 'Rikki Jamee', location: 'Wichita, Kansas', imageUrl: fireworksImage },
    { user: 'Rikki Jamee', location: 'Wichita, Kansas', imageUrl: beachImage },
    { user: 'Rikki Jamee', location: 'Wichita, Kansas', imageUrl: dogImage },
    { user: 'Rikki Jamee', location: 'Wichita, Kansas', imageUrl: cyclingImage },
  ];

  return (
    <div className="card-section">
      <h2>See What Others Share</h2>
      <p>Read posts from people like you and join in with your thoughts.</p>
      <div className="card-grid">
        {posts.map((post, index) => (
          <Card key={index} user={post.user} location={post.location} imageUrl={post.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default CardSection;