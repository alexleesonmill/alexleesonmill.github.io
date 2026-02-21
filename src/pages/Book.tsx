import styled from 'styled-components';
import { Typography } from 'antd';
import dragCover from '../assets/drag.jpg';
import { Container, StyledTitle } from '../components/common/Styled';

const { Paragraph } = Typography;

const BookSection = styled.div`
  background: white;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  text-align: center;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.xl};
    transform: translateY(-6px);
  }
`;

const BookCover = styled.img`
  max-width: 280px;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  border-radius: 12px;
  margin: ${({ theme }) => theme.spacing.md} auto;
  display: block;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  transition: all ${({ theme }) => theme.transitions.normal};
  cursor: pointer;
`;

const CoverLink = styled.a`
  display: inline-block;
  text-decoration: none;
  position: relative;

  &::after {
    content: 'Click to purchase';
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    opacity: 0;
    transition: all ${({ theme }) => theme.transitions.normal};
    white-space: nowrap;
  }

  &:hover {
    ${BookCover} {
      transform: scale(1.05) rotate(2deg);
      box-shadow: ${({ theme }) => theme.shadows.glow};
    }

    &::after {
      opacity: 1;
      bottom: -40px;
    }
  }
`;

const BookParagraph = styled(Paragraph)`
  font-size: 1.15rem;
  line-height: 1.8;
  margin-top: ${({ theme }) => theme.spacing.md};

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    transition: all ${({ theme }) => theme.transitions.normal};

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
      text-decoration: underline;
    }
  }
`;

export const Book = () => {
  return (
    <Container>
      <BookSection>
        <StyledTitle level={1}>Drag: A British History</StyledTitle>
        <CoverLink href="https://www.ucpress.edu/books/drag/hardcover" target="_blank" rel="noopener noreferrer">
          <BookCover src={dragCover} alt="Drag: A British History book cover" />
        </CoverLink>
        <BookParagraph>
          <a href="https://www.ucpress.edu/books/drag/hardcover" target="_blank" rel="noopener noreferrer">
            <strong>Drag: A British History</strong>
          </a>{' '}
          (published by University of California Press).
        </BookParagraph>
      </BookSection>
    </Container>
  );
};
