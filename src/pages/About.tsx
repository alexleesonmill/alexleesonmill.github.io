import styled from 'styled-components';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const About = () => {
  return (
    <Container>
      <Section>
        <Title level={1}>About Me</Title>
        <Paragraph>
          Welcome to my website. I'm a historian, writer, and researcher with a passion for 
          exploring historical topics and sharing knowledge through writing and consultation.
        </Paragraph>
        <Paragraph>
          This site serves as a central place to learn about my work, get in touch, and stay 
          updated on my latest projects and appearances.
        </Paragraph>
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
