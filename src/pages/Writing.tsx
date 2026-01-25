import styled from 'styled-components';
import { Typography, Tabs } from 'antd';

const { Title } = Typography;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Section = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const Writing = () => {
  const items = [
    {
      key: 'book',
      label: 'Book',
      children: (
        <Section>
          <p>[Book information and details]</p>
        </Section>
      ),
    },
    {
      key: 'articles',
      label: 'Articles',
      children: (
        <Section>
          <p>[List of articles with links and descriptions]</p>
        </Section>
      ),
    },
    {
      key: 'reviews',
      label: 'Book Reviews',
      children: (
        <Section>
          <p>[Book reviews and commentary]</p>
        </Section>
      ),
    },
  ];

  return (
    <Container>
      <Title level={1}>Writing</Title>
      <Tabs items={items} defaultActiveKey="book" />
    </Container>
  );
};
