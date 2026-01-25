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

  const onFinish = async (_values: any) => {
    setLoading(true);
    // For a static site, you'd typically use a service like Formspree or EmailJS
    // For now, we'll just show a success message
    setTimeout(() => {
      message.success('Thank you for your message! I\'ll get back to you soon.');
      form.resetFields();
      setLoading(false);
    }, 1000);
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
