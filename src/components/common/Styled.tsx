// Common styled components for reuse across pages
import styled from 'styled-components';
import { Typography } from 'antd';

const { Title } = Typography;

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  animation: fadeInUp 0.8s ease-out;
`;

export const StyledTitle = styled(Title)`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({ theme }) => theme.spacing.md} !important;
  font-weight: 800 !important;
`;
