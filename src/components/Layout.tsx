import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Layout as AntLayout, Menu } from 'antd';
import { 
  FaTwitter, 
  FaInstagram, 
  FaEnvelope, 
  FaLinkedin, 
  FaFacebook, 
  FaYoutube 
} from 'react-icons/fa';
import { socialLinks } from '../config/socialLinks';

const { Header, Content, Footer } = AntLayout;

const StyledLayout = styled(AntLayout)`
  min-height: 100vh;
`;

const StyledHeader = styled(Header)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 50%, ${({ theme }) => theme.colors.tertiary} 100%);
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  backdrop-filter: blur(10px);
  animation: slideInRight 0.6s ease-out;
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`;

const StyledMenu = styled(Menu)`
  background: transparent;
  border-bottom: none;
  flex: 1;
  
  /* Hide the active indicator underline */
  .ant-menu-item::after {
    display: none !important;
  }
  
  .ant-menu-item {
    color: white;
    font-weight: 600;
    font-size: 1rem;
    padding: 0 1.5rem !important;
    border-radius: 8px;
    margin: 0 0.25rem !important;
    transition: all ${({ theme }) => theme.transitions.normal};
    
    &:hover {
      color: white !important;
      background: rgba(255, 255, 255, 0.2) !important;
      transform: translateY(-2px);
    }
    
    &.ant-menu-item-selected {
      color: white !important;
      background: rgba(255, 255, 255, 0.25) !important;
      box-shadow: ${({ theme }) => theme.shadows.md};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-left: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.spacing.xs};
    margin-left: ${({ theme }) => theme.spacing.xs};
  }
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.2rem;
  transition: all ${({ theme }) => theme.transitions.normal};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  
  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-3px) scale(1.1);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
  
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }
`;

const StyledContent = styled(Content)`
  padding: ${({ theme }) => theme.spacing.md};
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  animation: fadeInUp 0.6s ease-out;
  min-height: calc(100vh - 200px);
`;

const StyledFooter = styled(Footer)`
  text-align: center;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.backgroundAlt} 0%, ${({ theme }) => theme.colors.background} 100%);
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: auto;
  padding: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-weight: 500;
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

  // Social media icons mapping
  const socialIcons = [
    { key: 'twitter', icon: FaTwitter, url: socialLinks.twitter },
    { key: 'instagram', icon: FaInstagram, url: socialLinks.instagram },
    { key: 'email', icon: FaEnvelope, url: socialLinks.email },
    { key: 'linkedin', icon: FaLinkedin, url: socialLinks.linkedin },
    { key: 'facebook', icon: FaFacebook, url: socialLinks.facebook },
    { key: 'youtube', icon: FaYoutube, url: socialLinks.youtube },
  ].filter(item => item.url); // Only show icons with URLs

  return (
    <StyledLayout>
      <StyledHeader>
        <HeaderContainer>
          <StyledMenu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
          />
          <SocialLinks>
            {socialIcons.map(({ key, icon: Icon, url }) => (
              <SocialLink
                key={key}
                href={url}
                target={key === 'email' ? undefined : '_blank'}
                rel={key === 'email' ? undefined : 'noopener noreferrer'}
                aria-label={key}
              >
                <Icon />
              </SocialLink>
            ))}
          </SocialLinks>
        </HeaderContainer>
      </StyledHeader>
      <StyledContent>{children}</StyledContent>
      <StyledFooter>
        © {new Date().getFullYear()} - All rights reserved
      </StyledFooter>
    </StyledLayout>
  );
};
