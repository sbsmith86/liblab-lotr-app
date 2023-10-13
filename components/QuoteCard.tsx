import React from 'react';
import styled from 'styled-components';

interface QuoteCardProps {
  quote: {
    dialog: string
  };
}

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
`;

const MovieCard: React.FC<QuoteProps> = ({ quote }) => {
  return (
    <Card>
      <h2>"{quote.dialog}"</h2>
    </Card>
  );
};

export default MovieCard;