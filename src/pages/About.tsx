import styled from 'styled-components';
import { Typography } from 'antd';
import jacobImage from '../assets/jbloomfield.jpg';

const { Title, Paragraph } = Typography;

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const AboutContent = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  flex: 2;
`;

const ImageWrapper = styled.div`
  flex: 1;
  min-width: 0;
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`;

export const About = () => {
  return (
    <Container>
      <Section>
        <Title level={1}>Jacob Bloomfield</Title>
        <AboutContent>
          <TextContent>
            <Paragraph>
              I'm a historian, writer, and researcher with a passion for 
              exploring historical topics and sharing knowledge through writing and consultation.
            </Paragraph>
            <Paragraph>
              This site serves as a central place to learn about my work, get in touch, and stay 
              updated on my latest projects and appearances.
            </Paragraph>
          </TextContent>
          <ImageWrapper>
            <ProfileImage 
              src={jacobImage} 
              alt="Jacob Bloomfield" 
            />
          </ImageWrapper>
        </AboutContent>
      </Section>
      <Section>
        <Title level={2}>Services</Title>
        <Paragraph>
          I have assisted with research, copy-editing, and consultation for several academic and 
          heritage projects. I am also available for press comment. Please get in touch if you're 
          interested in such services.
        </Paragraph>
      </Section>
    </Container>
  );
};
