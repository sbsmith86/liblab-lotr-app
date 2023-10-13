// characters.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CharacterCard from '../components/CharacterCard';

const Container = styled.div`
  text-align: center;
  margin: 2rem;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const CharactersPage: React.FC = () => {
  const [characters, setCharacters] = useState<any[]>([]);

  useEffect(() => {
    // Replace this with the actual Lord of the Rings API endpoint for characters
    const apiUrl = 'https://the-one-api.dev/v2/character';

    axios
      .get(apiUrl, {
        headers: { Authorization: `Bearer iDYcHhzyylo8Jk7TAXoV` }
      }).then((response) => {
        setCharacters(response.data.docs);
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
      });
  }, []);

  return (
    <Container>
      <Title>Lord of the Rings Characters</Title>
      {characters.map((character, index) => (
        <CharacterCard key={index} character={character} />
      ))}
    </Container>
  );
};

export default CharactersPage;
