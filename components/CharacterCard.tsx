import React from 'react';
import styled from 'styled-components';

interface CharacterCardProps {
  character: {
    name: string;
    race: string;
    gender: string;
    // Add any other character properties you want to display
  };
}

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
`;

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <Card>
      <h2>{character.name}</h2>
      <p>Race: {character.race}</p>
      <p>Gender: {character.gender}</p>
      {/* Add more properties as needed */}
    </Card>
  );
};

export default CharacterCard;