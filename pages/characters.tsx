import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CharacterCard from '../components/CharacterCard';
import Link from 'next/link';
import Layout from '../components/Layout';

const Container = styled.div`
  text-align: left;
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
    const apiUrl = 'https://the-one-api.dev/v2/character';
    // @NOTE - in a real production app, I would have the API key set as an .env
    // variable that doesn't get commited and pushed to the repo.
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
    <Layout>
        <Container>
        <Title>Lord of the Rings Characters</Title>
        <Link href="/">Back Home</Link>
        {characters.length ? (
            characters.map((character: any, index: number) => (
            <CharacterCard key={index} character={character} />
            ))
        ) : (
            <p>Loading data...</p>
        )}
        </Container>
    </Layout>
  );
};

export default CharactersPage;
