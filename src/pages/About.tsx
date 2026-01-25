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
    </Container>
  );
};
