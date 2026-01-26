import styled from 'styled-components';
import { Typography, Form, Input, Button, message } from 'antd';
import { useState } from 'react';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const IntroText = styled(Paragraph)`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: 1.1em;
  line-height: 1.8;
`;

const StyledForm = styled(Form)`
  margin-top: ${({ theme }) => theme.spacing.md};
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
      <Title level={1}>Contact</Title>
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
    </Container>
  );
};
