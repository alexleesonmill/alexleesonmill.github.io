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
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md} !important;
  font-weight: 800 !important;
`;
