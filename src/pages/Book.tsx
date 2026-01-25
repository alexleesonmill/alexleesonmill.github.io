import styled from 'styled-components';
import { Typography, Button } from 'antd';

const { Title, Paragraph } = Typography;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const BookCover = styled.div`
  width: 300px;
  height: 450px;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin: ${({ theme }) => theme.spacing.md} auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textLight};
`;

const PurchaseButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const Book = () => {
  return (
    <Container>
      <Title level={1}>My Book</Title>
      <div style={{ textAlign: 'center' }}>
        <BookCover>
          <span>Book Cover Placeholder</span>
        </BookCover>
        <Paragraph>
          This is my most significant work to date. [Add book description, 
          publication details, and any relevant information about the book here.]
        </Paragraph>
        <PurchaseButton type="primary" size="large">
          Purchase on Amazon
        </PurchaseButton>
      </div>
    </Container>
  );
};
