import React from 'react';
import styled from 'styled-components';

interface CharacterCardProps {
  character: {
    name: string;
    race: string;
    gender: string;
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
    </Card>
  );
};

export default CharacterCard;