import React from 'react';
import styled from 'styled-components';

interface QuoteCardProps {
  quote: {
    dialog: string
  };
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote }) => {
  return (
      <li>"{quote.dialog}"</li>
  );
};

export default QuoteCard;