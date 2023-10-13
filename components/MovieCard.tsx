import React from 'react';
import styled from 'styled-components';

interface MovieCardProps {
  movie: {
    name: string
  };
}

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
`;

const MovieCard: React.FC<MovieProps> = ({ movie }) => {
  return (
    <Card>
      <h2>{movie.name}</h2>
    </Card>
  );
};

export default MovieCard;