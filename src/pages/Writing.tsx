import styled from 'styled-components';
import { Typography, Tabs, List } from 'antd';
import { Container, StyledTitle } from '../components/common/Styled';

const { Paragraph } = Typography;

const WritingCard = styled.div`
  background: white;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const Section = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const StyledList = styled(List)`
  .ant-list-item {
    padding: ${({ theme }) => theme.spacing.md} 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    transition: all ${({ theme }) => theme.transitions.normal};

    &:hover {
      background: ${({ theme }) => theme.colors.backgroundAlt};
      padding-left: ${({ theme }) => theme.spacing.sm};
      border-left: 3px solid ${({ theme }) => theme.colors.primary};
    }

    a {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
      transition: all ${({ theme }) => theme.transitions.normal};

      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
        text-decoration: underline;
      }
    }
  }
`;

const StyledTabs = styled(Tabs)`
  .ant-tabs-tab {
    font-weight: 600;
    font-size: 1rem;
    padding: 1rem 1.5rem;

    &.ant-tabs-tab-active .ant-tabs-tab-btn {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
    }
  }

  .ant-tabs-ink-bar {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary} 0%,
      ${({ theme }) => theme.colors.secondary} 100%
    );
    height: 3px;
  }
`;

interface AcademicArticle {
  title: string;
  journal: string;
  url: string;
}

interface PressArticle {
  title: string;
  publication: string;
  url: string;
}

interface MediaAppearance {
  name: string;
  url: string;
}

interface BookReview {
  title: string;
  editor?: string;
  author?: string;
  url: string;
}

export const Writing = () => {
  const academicArticles: AcademicArticle[] = [
    {
      title:
        '"Little Richard: Down, Not Out": The Quasar of Rock\'s LGBTQ Iconicity and the Historical Reception to His Sexuality and Gender Presentation, 1955–Present',
      journal: 'Journal of the History of Sexuality',
      url: 'https://doi.org/10.1353/sex.00051'
    },
    {
      title: 'Splinters: Cross-Dressing Ex-Servicemen on the Interwar Stage',
      journal: 'Twentieth Century British History',
      url: 'https://doi.org/10.1093/tcbh/hwy037'
    }
  ];

  const pressArticles: PressArticle[] = [
    {
      title: 'Dress Code',
      publication: 'Air Mail',
      url: 'https://airmail.news/books/2023/9/dress-code'
    },
    {
      title: '"They Helped Win the War": The Surprisingly Mainstream History of Drag',
      publication: 'The Telegraph',
      url: 'https://www.telegraph.co.uk/books/non-fiction/drag-surprising-mainstream-history/'
    }
  ];

  const mediaAppearances: MediaAppearance[] = [
    {
      name: 'MDR',
      url: 'https://www.mdr.de/nachrichten/deutschland/politik/transfrauen-selbstbestimmung-uk-usa-einordnung-102.html'
    },
    {
      name: 'BBC Culture',
      url: 'https://www.bbc.com/culture/article/20241011-how-shocking-drag-queen-divine-went-mainstream'
    },
    {
      name: 'Dazed',
      url: 'https://www.dazeddigital.com/life-culture/article/60761/1/the-da-zed-guide-to-british-drag-jacob-bloomfield'
    },
    {
      name: 'The Herald',
      url: 'https://www.heraldscotland.com/politics/24010114.secret-history-drag-trans-wars-soldiers-sex-scandals/'
    },
    {
      name: 'The Stage',
      url: 'https://www.thestage.co.uk/obituaries--archive/archive/shantay-you-stay-how-drag-emerged-from-showbiz-to-be-a-cornerstone-of-gay-culture'
    },
    {
      name: 'Betwixt the Sheets',
      url: 'https://podcasts.apple.com/us/podcast/the-history-of-drag-queens/id1612090432?i=1000652030943'
    },
    {
      name: 'BBC History Extra',
      url: 'https://podcasts.apple.com/us/podcast/history-extra-podcast/id256580326?i=1000644755540'
    },
    {
      name: 'QX',
      url: 'https://www.qxmagazine.com/2023/09/qx-interviews-jacob-bloomfield-author-of-drag-a-british-history/'
    },
    {
      name: 'Times Radio',
      url: 'https://x.com/TimesRadio/status/1706693421954470333?s=20'
    }
  ];

  const bookReviews: BookReview[] = [
    {
      title: 'The Pet Shop Boys and the Political',
      editor: 'edited by Bodie A. Ashton',
      url: 'https://www.hsozkult.de/review/id/reb-144446?language=en'
    },
    {
      title: "The Bebop Scene in London's Soho",
      author: '1945-1950 by Ray Kinsella',
      url: 'https://www.hsozkult.de/publicationreview/id/reb-132762'
    }
  ];

  const items = [
    {
      key: 'academic',
      label: 'Academic Journal Articles',
      children: (
        <Section>
          <StyledList
            dataSource={academicArticles}
            renderItem={item => {
              const article = item as AcademicArticle;
              return (
                <List.Item>
                  <div>
                    <Paragraph strong style={{ marginBottom: 4 }}>
                      <a href={article.url} target="_blank" rel="noopener noreferrer">
                        {article.title}
                      </a>
                    </Paragraph>
                    <Paragraph type="secondary" style={{ marginBottom: 0 }}>
                      in <em>{article.journal}</em>
                    </Paragraph>
                  </div>
                </List.Item>
              );
            }}
          />
        </Section>
      )
    },
    {
      key: 'press',
      label: 'Articles in the Press',
      children: (
        <Section>
          <StyledList
            dataSource={pressArticles}
            renderItem={item => {
              const article = item as PressArticle;
              return (
                <List.Item>
                  <div>
                    <Paragraph strong style={{ marginBottom: 4 }}>
                      <a href={article.url} target="_blank" rel="noopener noreferrer">
                        {article.title}
                      </a>
                    </Paragraph>
                    <Paragraph type="secondary" style={{ marginBottom: 0 }}>
                      in <em>{article.publication}</em>
                    </Paragraph>
                  </div>
                </List.Item>
              );
            }}
          />
        </Section>
      )
    },
    {
      key: 'media',
      label: 'Selected Media Appearances',
      children: (
        <Section>
          <StyledList
            dataSource={mediaAppearances}
            renderItem={item => {
              const appearance = item as MediaAppearance;
              return (
                <List.Item>
                  <Paragraph style={{ marginBottom: 0 }}>
                    <a href={appearance.url} target="_blank" rel="noopener noreferrer">
                      {appearance.name}
                    </a>
                  </Paragraph>
                </List.Item>
              );
            }}
          />
        </Section>
      )
    },
    {
      key: 'reviews',
      label: 'Selected Book Reviews',
      children: (
        <Section>
          <StyledList
            dataSource={bookReviews}
            renderItem={item => {
              const review = item as BookReview;
              return (
                <List.Item>
                  <div>
                    <Paragraph strong style={{ marginBottom: 0 }}>
                      <a href={review.url} target="_blank" rel="noopener noreferrer">
                        {review.title}
                      </a>
                      {review.editor && `, ${review.editor}`}
                      {review.author && `, ${review.author}`}
                    </Paragraph>
                  </div>
                </List.Item>
              );
            }}
          />
        </Section>
      )
    }
  ];

  return (
    <Container>
      <WritingCard>
        <StyledTitle level={1}>Writing</StyledTitle>
        <StyledTabs items={items} defaultActiveKey="academic" />
      </WritingCard>
    </Container>
  );
};
