import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// import MovieCard from '../components/MovieCard';
import QuoteCard from '../components/QuoteCard';

const Container = styled.div`
  text-align: center;
  margin: 2rem;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const QuotesPage: React.FC = () => {
  const [quotes, setQuotes] = useState<any[]>([]);

  useEffect(() => {
    // Replace this with the actual Lord of the Rings API endpoint for characters
    const apiUrl = 'https://the-one-api.dev/v2/quote';

    axios
      .get(apiUrl, {
        headers: { Authorization: `Bearer iDYcHhzyylo8Jk7TAXoV` }
      }).then((response) => {
        setQuotes(response.data.docs);
      })
      .catch((error) => {
        console.error('Error fetching quotes:', error);
      });
  }, []);

  return (
    <Container>
      <Title>Lord of the Rings Quotes</Title>
      {quotes.map((quote, index) => (
        <QuoteCard key={index} quote={quote} />
      ))}
    </Container>
  );
};

export default QuotesPage;
