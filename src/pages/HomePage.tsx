import { useState } from 'react';
import styled from 'styled-components';
import { Form, Input, Button, message, Tabs } from 'antd';
import jacobImage from '../assets/jacob.jpg';
import dragCover from '../assets/drag.jpg';
import { theme } from '../theme';
import {
  academicArticles,
  pressArticles,
  mediaAppearances,
  bookReviews
} from '../data/writing';

const { TextArea } = Input;

/* ─── Shared layout ─── */
const Section = styled.section<{ $alt?: boolean }>`
  padding: 5rem 1.5rem;
  background: ${({ $alt }) => ($alt ? theme.colors.backgroundAlt : theme.colors.background)};
  scroll-margin-top: 64px;

  @media (max-width: 768px) {
    padding: 3.5rem 1.25rem;
  }
`;

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
`;

/* ─── Hero ─── */
const HeroSection = styled.section`
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  background-image: url(${jacobImage});
  background-size: cover;
  background-position: right center;
  scroll-margin-top: 64px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba(20, 50, 22, 0.72) 40%, transparent 75%);
  }

  @media (max-width: 768px) {
    min-height: 70vh;
    &::before {
      background: rgba(20, 50, 22, 0.65);
    }
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
`;

const HeroName = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroTagline = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.75rem;
  letter-spacing: 0.02em;
`;

const HeroBio = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.72);
  max-width: 440px;
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const HeroCta = styled.button`
  background: #ffffff;
  color: ${theme.colors.text};
  border: none;
  cursor: pointer;
  padding: 0.75rem 1.75rem;
  border-radius: 4px;
  font-size: 0.95rem;
  font-weight: 600;
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: ${theme.colors.primary};
    color: #ffffff;
  }
`;

/* ─── Bio section ─── */
const BioGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const BioText = styled.div`
  p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: ${theme.colors.text};
    margin-bottom: 1.25rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ServicesBlock = styled.div``;

const ServicesTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: ${theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1rem;
`;

const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceItem = styled.li`
  font-size: 0.95rem;
  color: ${theme.colors.textLight};
  padding: 0.5rem 0;
  border-bottom: 1px solid ${theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`;

/* ─── Book section ─── */
const BookInner = styled.div`
  max-width: 480px;
  margin: 0 auto;
  text-align: center;
`;

const BookCoverLink = styled.a`
  display: inline-block;
  margin-bottom: 1.5rem;
`;

const BookCover = styled.img`
  max-width: 260px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const BookTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: 0.5rem;
`;

const BookPublisher = styled.p`
  font-size: 0.95rem;
  color: ${theme.colors.textLight};
  margin-bottom: 1.5rem;
`;

const PurchaseButton = styled.a`
  display: inline-block;
  background: ${theme.colors.primary};
  color: #ffffff;
  padding: 0.7rem 1.75rem;
  border-radius: 4px;
  font-size: 0.95rem;
  font-weight: 600;
  transition: background 0.2s ease;

  &:hover {
    background: ${theme.colors.primaryHover};
    color: #ffffff;
  }
`;

/* ─── Writing section ─── */
const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    overflow-x: auto;
    white-space: nowrap;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .ant-tabs-tab {
    font-size: 0.9rem;
    font-weight: 500;
    padding: 0.75rem 0;
  }

  .ant-tabs-ink-bar {
    background: ${theme.colors.primary};
  }
`;

const ArticleList = styled.div`
  margin-top: 1rem;
`;

const ArticleItem = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid ${theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`;

const ArticleTitle = styled.a`
  display: block;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${theme.colors.primary};
  margin-bottom: 0.25rem;
  line-height: 1.5;

  &:hover {
    text-decoration: underline;
    color: ${theme.colors.primary};
  }
`;

const ArticleMeta = styled.p`
  font-size: 0.875rem;
  color: ${theme.colors.textLight};
  margin: 0;
`;

/* ─── Contact section ─── */
const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div``;

const ContactIntro = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${theme.colors.text};
  margin-bottom: 1.5rem;
`;

const StyledForm = styled(Form)`
  .ant-input,
  .ant-input-affix-wrapper,
  textarea.ant-input {
    border-radius: 4px;
    border: 1px solid ${theme.colors.border};
    font-size: 0.95rem;

    &:hover {
      border-color: ${theme.colors.primary};
    }

    &:focus,
    &.ant-input-affix-wrapper-focused {
      border-color: ${theme.colors.primary};
      box-shadow: 0 0 0 2px rgba(44, 92, 46, 0.15);
    }
  }

  .ant-form-item {
    margin-bottom: 1rem;
  }

  .ant-form-item-label > label {
    font-size: 0.9rem;
    font-weight: 500;
    color: ${theme.colors.text};
  }
`;

const writingTabs = [
  {
    key: 'academic',
    label: 'Academic Articles',
    children: (
      <ArticleList>
        {academicArticles.map(a => (
          <ArticleItem key={a.url}>
            <ArticleTitle href={a.url} target="_blank" rel="noopener noreferrer">
              {a.title}
            </ArticleTitle>
            <ArticleMeta>
              in <em>{a.journal}</em>
            </ArticleMeta>
          </ArticleItem>
        ))}
      </ArticleList>
    )
  },
  {
    key: 'press',
    label: 'Press',
    children: (
      <ArticleList>
        {pressArticles.map(a => (
          <ArticleItem key={a.url}>
            <ArticleTitle href={a.url} target="_blank" rel="noopener noreferrer">
              {a.title}
            </ArticleTitle>
            <ArticleMeta>
              in <em>{a.publication}</em>
            </ArticleMeta>
          </ArticleItem>
        ))}
      </ArticleList>
    )
  },
  {
    key: 'media',
    label: 'Media',
    children: (
      <ArticleList>
        {mediaAppearances.map(a => (
          <ArticleItem key={a.url}>
            <ArticleTitle href={a.url} target="_blank" rel="noopener noreferrer">
              {a.name}
            </ArticleTitle>
          </ArticleItem>
        ))}
      </ArticleList>
    )
  },
  {
    key: 'reviews',
    label: 'Book Reviews',
    children: (
      <ArticleList>
        {bookReviews.map(r => (
          <ArticleItem key={r.url}>
            <ArticleTitle href={r.url} target="_blank" rel="noopener noreferrer">
              {r.title}
              {r.editor ? `, ${r.editor}` : ''}
              {r.author ? `, ${r.author}` : ''}
            </ArticleTitle>
          </ArticleItem>
        ))}
      </ArticleList>
    )
  }
];

/* ─── Component ─── */
interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const HomePage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });
  };

  const onFinish = async (rawValues: unknown) => {
    const values = rawValues as ContactFormValues;
    setLoading(true);
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      if (!accessKey) {
        message.error('Contact form is not configured. Please email jrb45@kent.ac.uk directly.');
        setLoading(false);
        return;
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: values.subject || 'Contact Form Submission',
          from_name: values.name,
          from_email: values.email,
          message: `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`,
          to_email: 'jrb45@kent.ac.uk'
        })
      });

      const data = await response.json();

      if (data.success) {
        message.success("Thank you for your message! I'll get back to you soon.");
        form.resetFields();
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch {
      message.error(
        'Sorry, there was an error sending your message. Please try again or email me directly at jrb45@kent.ac.uk'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <HeroSection id="about">
        <HeroContent>
          <HeroName>Jacob Bloomfield</HeroName>
          <HeroTagline>Historian · Writer · Researcher</HeroTagline>
          <HeroBio>
            I'm a historian and writer with a passion for exploring the cultural and social past. Based in the UK, I
            research and write on gender, performance, and modern British history.
          </HeroBio>
          <HeroCta onClick={() => scrollTo('contact')}>Get in Touch</HeroCta>
        </HeroContent>
      </HeroSection>

      {/* Bio */}
      <Section>
        <Container>
          <BioGrid>
            <BioText>
              <p>
                I'm a PhD historian, writer, and researcher with a passion for exploring historical topics and sharing
                knowledge through writing and consultation.
              </p>
              <p>
                I'm affiliated with the University of Konstanz, Germany, and University of Kent, UK. Specialities
                include the history of drag performance and the life of rock musician Little Richard, as well as
                cultural history and the history of sexuality – on both sides of the Atlantic – more generally.
              </p>
              <p>
                <em>'Dr Jacob Bloomfield is the uncontested expert when it comes to the history of drag in this country.' – The Herald.</em>
              </p>
            </BioText>
            <ServicesBlock>
              <ServicesTitle>Services</ServicesTitle>
              <ServicesList>
                <ServiceItem>Historical research</ServiceItem>
                <ServiceItem>Copy-editing</ServiceItem>
                <ServiceItem>Academic consultation</ServiceItem>
                <ServiceItem>Press comment</ServiceItem>
              </ServicesList>
            </ServicesBlock>
          </BioGrid>
        </Container>
      </Section>

      {/* Book */}
      <Section $alt id="book">
        <Container>
          <SectionTitle>Book</SectionTitle>
          <BookInner>
            <BookCoverLink
              href="https://www.ucpress.edu/books/drag/hardcover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookCover src={dragCover} alt="Drag: A British History book cover" />
            </BookCoverLink>
            <BookTitle>Drag: A British History</BookTitle>
            <BookPublisher>University of California Press</BookPublisher>
            <PurchaseButton
              href="https://www.ucpress.edu/books/drag/hardcover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Purchase
            </PurchaseButton>
          </BookInner>
        </Container>
      </Section>

      {/* Writing */}
      <Section id="writing">
        <Container>
          <SectionTitle>Writing</SectionTitle>
          <StyledTabs items={writingTabs} defaultActiveKey="academic" />
        </Container>
      </Section>

      {/* Contact */}
      <Section $alt id="contact">
        <Container>
          <SectionTitle>Contact</SectionTitle>
          <ContactGrid>
            <ContactInfo>
              <ContactIntro>
                Please feel free to get in touch if you'd like to interview me for a news story, chat about historical
                topics in my wheelhouse, or whatever else. I have experience in assisting others in historical research,
                consulting museums and cultural institutions regarding historical artefacts and topics, and copy-editing
                academic books: I'm happy to do any of these things for a reasonable fee.
              </ContactIntro>
            </ContactInfo>
            <div>
              <StyledForm form={form} layout="vertical" onFinish={onFinish} size="large">
                <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter your name' }]}>
                  <Input placeholder="Your name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email' }
                  ]}
                >
                  <Input placeholder="your.email@example.com" />
                </Form.Item>
                <Form.Item
                  name="subject"
                  label="Subject"
                  rules={[{ required: true, message: 'Please enter a subject' }]}
                >
                  <Input placeholder="What is this regarding?" />
                </Form.Item>
                <Form.Item
                  name="message"
                  label="Message"
                  rules={[{ required: true, message: 'Please enter your message' }]}
                >
                  <TextArea rows={6} placeholder="Your message here..." />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" loading={loading} block>
                    Send Message
                  </Button>
                </Form.Item>
              </StyledForm>
            </div>
          </ContactGrid>
        </Container>
      </Section>
    </>
  );
};
