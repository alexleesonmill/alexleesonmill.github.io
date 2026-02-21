import { type ReactNode, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaTwitter, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { socialLinks } from '../config/socialLinks';

/* ─── Nav wrapper ─── */
const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  z-index: 1000;
  background: ${({ $scrolled }) => ($scrolled ? 'rgba(44, 92, 46, 0.97)' : 'transparent')};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(8px)' : 'none')};
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
  box-shadow: ${({ $scrolled }) => ($scrolled ? '0 1px 8px rgba(0,0,0,0.08)' : 'none')};
  border-bottom: 1px solid ${({ $scrolled }) => ($scrolled ? 'rgba(0,0,0,0.15)' : 'transparent')};
`;

const NavInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SiteName = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.02em;
  padding: 0;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  padding: 0;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
`;

const NavSocials = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  color: #ffffff;
  padding: 0.25rem;
  line-height: 1;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

/* ─── Mobile overlay ─── */
const MobileOverlay = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    inset: 0;
    z-index: 1001;
    background: rgba(44, 92, 46, 0.99);
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? 'all' : 'none')};
    transition: opacity 0.25s ease;
  }
`;

const MobileCloseButton = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
  color: #ffffff;
  line-height: 1;
  display: flex;
  align-items: center;
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const MobileNavLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  padding: 0;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const MobileSocials = styled.div`
  position: absolute;
  bottom: 2.5rem;
  display: flex;
  gap: 1.5rem;
`;

const MobileSocialLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
`;

/* ─── Page body ─── */
const PageBody = styled.div`
  padding-top: 0;
`;

/* ─── Footer ─── */
const FooterEl = styled.footer`
  text-align: center;
  padding: 2rem 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
`;

/* ─── Nav section ids ─── */
const sections = [
  { id: 'about', label: 'About' },
  { id: 'book', label: 'Book' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' }
];

const socialIcons = [
  { key: 'twitter', icon: FaTwitter, url: socialLinks.twitter },
  { key: 'email', icon: FaEnvelope, url: socialLinks.email }
].filter(item => item.url);

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });
  };

  return (
    <>
      <Nav $scrolled={navScrolled}>
        <NavInner>
          <SiteName onClick={() => handleNavClick('about')}>Jacob Bloomfield</SiteName>
          <NavLinks>
            {sections.map(({ id, label }) => (
              <NavLink key={id} onClick={() => handleNavClick(id)}>
                {label}
              </NavLink>
            ))}
          </NavLinks>
          <NavSocials>
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
          </NavSocials>
          <HamburgerButton onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <FaBars />
          </HamburgerButton>
        </NavInner>
      </Nav>

      <MobileOverlay $open={mobileOpen}>
        <MobileCloseButton onClick={() => setMobileOpen(false)} aria-label="Close menu">
          <FaTimes />
        </MobileCloseButton>
        <MobileNavLinks>
          {sections.map(({ id, label }) => (
            <MobileNavLink key={id} onClick={() => handleNavClick(id)}>
              {label}
            </MobileNavLink>
          ))}
        </MobileNavLinks>
        <MobileSocials>
          {socialIcons.map(({ key, icon: Icon, url }) => (
            <MobileSocialLink
              key={key}
              href={url}
              target={key === 'email' ? undefined : '_blank'}
              rel={key === 'email' ? undefined : 'noopener noreferrer'}
              aria-label={key}
            >
              <Icon />
            </MobileSocialLink>
          ))}
        </MobileSocials>
      </MobileOverlay>

      <PageBody>{children}</PageBody>

      <FooterEl>© {new Date().getFullYear()} Jacob Bloomfield — All rights reserved</FooterEl>
    </>
  );
};
