import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';
import Link from 'next/link';

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
    // Replace this with the actual Lord of the Rings API endpoint for characters
    const apiUrl = 'https://the-one-api.dev/v2/movie';

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
  );
};

export default MoviesPage;
