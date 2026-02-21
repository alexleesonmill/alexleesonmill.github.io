import styled from 'styled-components';
import { Typography } from 'antd';
import jacobImage from '../assets/jbloomfield.jpg';
import { Container } from '../components/common/Styled';

const { Title, Paragraph } = Typography;

const AboutContent = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  min-width: 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: 10px;
    bottom: 10px;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary} 0%,
      ${({ theme }) => theme.colors.tertiary} 100%
    );
    border-radius: 16px;
    z-index: -1;
    opacity: 0.3;
    transition: all ${({ theme }) => theme.transitions.normal};
  }

  &:hover::before {
    opacity: 0.5;
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  object-fit: cover;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: scale(1.03);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  background: white;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
    transform: translateY(-4px);
  }
`;

const StyledTitle = styled(Title)`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({ theme }) => theme.spacing.md} !important;
  font-weight: 800 !important;
`;

const TextContent = styled.div`
  flex: 2;

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const About = () => {
  return (
    <Container>
      <Section>
        <StyledTitle level={1}>Jacob Bloomfield</StyledTitle>
        <AboutContent>
          <TextContent>
            <Paragraph>
              I'm a historian, writer, and researcher with a passion for exploring historical topics and sharing
              knowledge through writing and consultation.
            </Paragraph>
            <Paragraph>
              This site serves as a central place to learn about my work, get in touch, and stay updated on my latest
              projects and appearances.
            </Paragraph>
          </TextContent>
          <ImageWrapper>
            <ProfileImage src={jacobImage} alt="Jacob Bloomfield" />
          </ImageWrapper>
        </AboutContent>
      </Section>
      <Section>
        <StyledTitle level={2}>Services</StyledTitle>
        <Paragraph>
          I have assisted with research, copy-editing, and consultation for several academic and heritage projects. I am
          also available for press comment. Please get in touch if you're interested in such services.
        </Paragraph>
      </Section>
    </Container>
  );
};
