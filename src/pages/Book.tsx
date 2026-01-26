import styled from 'styled-components';
import { Typography } from 'antd';
import dragCover from '../assets/drag.jpg';

const { Title, Paragraph } = Typography;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const BookCover = styled.img`
  max-width: 200px;
  height: auto;
  max-height: 250px;
  object-fit: contain;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin: ${({ theme }) => theme.spacing.md} auto;
  display: block;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
`;

const CoverLink = styled.a`
  display: block;
  text-decoration: none;
  
  &:hover ${BookCover} {
    transform: scale(1.02);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const Book = () => {
  return (
    <Container>
      <Title level={1}>Drag: A British History</Title>
      <div style={{ textAlign: 'center' }}>
        <CoverLink 
          href="https://www.ucpress.edu/books/drag/hardcover" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <BookCover src={dragCover} alt="Drag: A British History book cover" />
        </CoverLink>
        <Paragraph>
          <a href="https://www.ucpress.edu/books/drag/hardcover" target="_blank" rel="noopener noreferrer">
            <strong>Drag: A British History</strong>
          </a>{' '}
          (published by University of California Press).
        </Paragraph>
      </div>
    </Container>
  );
};
