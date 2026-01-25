import styled from 'styled-components';
import { Typography, List } from 'antd';

const { Title } = Typography;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const UpdateItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: 4px;
`;

const UpdateDate = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9em;
`;

export const Updates = () => {
  // This would typically come from a data source
  const updates = [
    {
      date: '2025-01-20',
      content: 'I was mentioned in such-and-such an article',
      link: 'https://example.com/article',
    },
    {
      date: '2025-01-15',
      content: 'New book review published',
      link: 'https://example.com/review',
    },
  ];

  return (
    <Container>
      <Title level={1}>Updates</Title>
      <List
        dataSource={updates}
        renderItem={(item) => (
          <List.Item>
            <UpdateItem>
              <UpdateDate>{item.date}</UpdateDate>
              <p>
                {item.content}{' '}
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Read more →
                </a>
              </p>
            </UpdateItem>
          </List.Item>
        )}
      />
    </Container>
  );
};
