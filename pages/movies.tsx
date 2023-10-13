import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';
import Link from 'next/link';
import Layout from '../components/Layout';

const Container = styled.div`
  text-align: center;
  margin: 2rem;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const MoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const apiUrl = 'https://the-one-api.dev/v2/movie';

    // @NOTE - in a real production app, I would have the API key set as an .env
    // variable that doesn't get commited and pushed to the repo.
    axios
      .get(apiUrl, {
        headers: { Authorization: `Bearer iDYcHhzyylo8Jk7TAXoV` }
      }).then((response) => {
        setMovies(response.data.docs);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  return (
    <Layout>
        <Container>
        <Title>Lord of the Rings Movies</Title>
        <Link href="/">Back Home</Link>
        <div>
            {movies.length ? (
                movies.map((movie: any, index: number) => (
                    <MovieCard key={index} movie={movie} />
                ))
            ) : (
                <p>Loading data...</p>
            )}
        </div>
        </Container>
    </Layout>
  );
};

export default MoviesPage;
