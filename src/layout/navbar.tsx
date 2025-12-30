import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../assets/logo.svg';
import { textSizes } from '../utility/constants';

const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.white};
  height: 80px;
  align-items: center;
  padding: 20px;
  padding-left: 24px;
  border-radius: 200px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
`;

const NavbarWrapper = styled(motion.div)`
  width: 100%;
  max-width: 1240px;
  position: fixed;
  z-index: 20;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 20px;
  top: 40px;
`;

const Logo = styled.img`
  height: 34px;
  width: 107px;
`;

const NavItemContainer = styled.div`
  display: flex;
  column-gap: 16px;
`;

const NavItem = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${textSizes.medium};
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;

const ContactButton = styled.button`
  border: none;
  outline: none;
  background: ${({ theme }) => theme.colors.blue};
  height: 40px;
  display: flex;
  align-items: center;
  padding: 11px 18px;
  border-radius: 100px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  font-size: ${textSizes.medium};

  span {
    transition: all 0.5s ease;
    position: relative;
    z-index: 1;
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    span {
      color: ${({ theme }) => theme.colors.blue};
    }

    .white-bg {
      width: 220px;
      height: 220px;
    }
  }
`;

const WhiteBg = styled.div`
  background: ${({ theme }) => theme.colors.white};
  height: 40px;
  width: 40px;
  border-radius: 100px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -40px;
  transition: all 0.5s ease;
`;

const ContactButtonWrapper = styled.div`
  border-radius: 100px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0px 20px rgba(0, 0, 0, 0.15);
  }
`;

export function Navbar() {
  return (
    <NavbarWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <NavbarContainer>
        <Logo src={logo} alt="Logo" />
        <NavItemContainer>
          <NavItem>
            <span>How it Works</span>
          </NavItem>
          <NavItem>
            <span>Pricing</span>
          </NavItem>
          <NavItem>
            <span>Use Case</span>
          </NavItem>
          <NavItem>
            <span>FAQ</span>
          </NavItem>
        </NavItemContainer>
        <ContactButtonWrapper>
          <ContactButton>
            <WhiteBg className="white-bg" />
            <span>Contact Sales</span>
          </ContactButton>
        </ContactButtonWrapper>
      </NavbarContainer>
    </NavbarWrapper>
  );
}
