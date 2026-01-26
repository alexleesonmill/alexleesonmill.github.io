import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Layout as AntLayout, Menu } from 'antd';

const { Header, Content, Footer } = AntLayout;

const StyledLayout = styled(AntLayout)`
  min-height: 100vh;
`;

const StyledHeader = styled(Header)`
  background: ${({ theme }) => theme.colors.primary};
  padding: 0 ${({ theme }) => theme.spacing.md};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const StyledMenu = styled(Menu)`
  background: transparent;
  border-bottom: none;
  
  .ant-menu-item {
    color: white;
    
    &:hover {
      color: ${({ theme }) => theme.colors.accent} !important;
    }
    
    &.ant-menu-item-selected {
      color: ${({ theme }) => theme.colors.accent} !important;
    }
  }
`;

const StyledContent = styled(Content)`
  padding: ${({ theme }) => theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const StyledFooter = styled(Footer)`
  text-align: center;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: auto;
`;

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const menuItems = [
    { key: '/', label: <Link to="/">About</Link> },
    { key: '/book', label: <Link to="/book">Book</Link> },
    { key: '/writing', label: <Link to="/writing">Writing</Link> },
    { key: '/contact', label: <Link to="/contact">Contact</Link> },
  ];

  return (
    <StyledLayout>
      <StyledHeader>
        <StyledMenu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menuItems}
        />
      </StyledHeader>
      <StyledContent>{children}</StyledContent>
      <StyledFooter>
        © {new Date().getFullYear()} - All rights reserved
      </StyledFooter>
    </StyledLayout>
  );
};
