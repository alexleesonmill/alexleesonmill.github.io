import styled from 'styled-components';
import { Typography, Form, Input, Button, message } from 'antd';
import { useState } from 'react';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  animation: fadeInUp 0.8s ease-out;
`;

const ContactCard = styled.div`
  background: white;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transition: all ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const StyledTitle = styled(Title)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({ theme }) => theme.spacing.md} !important;
  font-weight: 800 !important;
`;

const IntroText = styled(Paragraph)`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: 1.15rem;
  line-height: 1.9;
  color: ${({ theme }) => theme.colors.text};
`;

const StyledForm = styled(Form)`
  margin-top: ${({ theme }) => theme.spacing.md};
  
  .ant-input,
  .ant-input-affix-wrapper {
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.colors.border};
    transition: all ${({ theme }) => theme.transitions.normal};
    
    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
    }
    
    &:focus,
    &.ant-input-affix-wrapper-focused {
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }
  }
  
  .ant-btn-primary {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
    border: none;
    border-radius: 8px;
    height: 48px;
    font-weight: 600;
    font-size: 1rem;
    transition: all ${({ theme }) => theme.transitions.normal};
    box-shadow: ${({ theme }) => theme.shadows.md};
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows.lg};
      background: linear-gradient(135deg, ${({ theme }) => theme.colors.secondary} 0%, ${({ theme }) => theme.colors.tertiary} 100%);
    }
  }
`;

export const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      
      if (!accessKey) {
        message.error('Contact form is not configured. Please email jrb45@kent.ac.uk directly.');
        setLoading(false);
        return;
      }

      // Using Web3Forms - free contact form service
      // Get your access key from https://web3forms.com (free, no signup required)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: values.subject || 'Contact Form Submission',
          from_name: values.name,
          from_email: values.email,
          message: `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`,
          to_email: 'jrb45@kent.ac.uk',
        }),
      });

      const data = await response.json();

      if (data.success) {
        message.success('Thank you for your message! I\'ll get back to you soon.');
        form.resetFields();
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      message.error('Sorry, there was an error sending your message. Please try again or email me directly at jrb45@kent.ac.uk');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <ContactCard>
        <StyledTitle level={1}>Contact</StyledTitle>
        <IntroText>
          Please feel free to get in touch if you'd like to interview me for a news story, 
          chat about historical topics in my wheelhouse, or whatever else. I have experience 
          in assisting others in historical research, consulting museums and cultural institutions 
          regarding historical artefacts and topics, and copy-editing academic books: I'm happy 
          to do any of these things for a reasonable fee.
        </IntroText>
        <StyledForm
        form={form}
        layout="vertical"
        onFinish={onFinish}
        size="large"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input placeholder="Your name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
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
          <TextArea
            rows={6}
            placeholder="Your message here..."
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Send Message
          </Button>
        </Form.Item>
      </StyledForm>
      </ContactCard>
    </Container>
  );
};
