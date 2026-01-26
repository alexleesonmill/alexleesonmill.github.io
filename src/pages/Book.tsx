import styled from 'styled-components';
import { Typography, Button } from 'antd';
import dragCover from '../assets/drag.jpg';

const { Title, Paragraph } = Typography;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const BookCover = styled.img`
  width: 300px;
  height: auto;
  max-height: 450px;
  object-fit: contain;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin: ${({ theme }) => theme.spacing.md} auto;
  display: block;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PurchaseButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const Book = () => {
  return (
    <Container>
      <Title level={1}>Drag: A British History</Title>
      <div style={{ textAlign: 'center' }}>
        <BookCover src={dragCover} alt="Drag: A British History book cover" />
        <Paragraph>
          <a href="https://www.ucpress.edu/books/drag/hardcover" target="_blank" rel="noopener noreferrer">
            <strong>Drag: A British History</strong>
          </a>{' '}
          (published by University of California Press).
        </Paragraph>
        <a 
          href="https://www.ucpress.edu/books/drag/hardcover" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <PurchaseButton type="primary" size="large">
            Purchase
          </PurchaseButton>
        </a>
      </div>
    </Container>
  );
};
