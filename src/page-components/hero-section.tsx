import styled from 'styled-components';
import { textSizes } from '../utility/constants';
import appleLogo from '../assets/apple-logo.svg';
import threeDots from '../assets/three-dots.svg';
import arrowDown from '../assets/arrow-down.svg';
import { motion } from 'framer-motion';

const MainContentContainer = styled(motion.div)`
  width: 100%;
  margin-top: 185px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
`;

const Title = styled.h1`
  font-size: ${textSizes.extraLarge};
  font-weight: 1000;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  padding: 20px;
  max-width: 736px;
  line-height: 1.2;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.blue};
`;

const Description = styled.p`
  max-width: 590px;
  padding: 0px 20px;
  margin-top: 20px;
  text-align: center;
  font-size: ${textSizes.large};
  font-weight: 300;
  letter-spacing: -0.5px;
`;

const Pill = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 8px;
  border-radius: 100px;
  font-size: ${textSizes.medium};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  column-gap: 8px;
  span {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const BlueButton = styled.button`
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  outline: none;
  padding: 12px 20px;
  border-radius: 100px;
  cursor: pointer;
  font-size: ${textSizes.large};
`;

const BorderButton = styled.button`
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.black};
  outline: none;
  padding: 12px 20px;
  background: none;
  border-radius: 100px;
  font-size: ${textSizes.large};

  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 12px;
  img {
    width: 18.5px;
    height: 22px;
  }
`;

const ObliqueLine = styled.div`
  width: 1px;
  height: 18px;
  background: ${({ theme }) => theme.colors.black};
  opacity: 0.5;
`;

const ButtonContainer = styled.div`
  display: flex;
  column-gap: 12px;
  margin-top: 48px;
`;

const ScrollDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  margin-top: 314px;
`;

export function HeroSection() {
  return (
    <MainContentContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Pill>
        <img src={threeDots} alt="Three Dots" />
        <span>#1 iMessage Automation Tool</span>
      </Pill>
      <Title>
        <Highlight>iMessage</Highlight> Automation for Teams and AI Workflows.
      </Title>
      <Description>
        Coup lets you, your team, or AI workflows send iMessages directly from
        your phone number, running securely on your Mac or Mac Mini.
      </Description>
      <ButtonContainer>
        <BlueButton>Get Started</BlueButton>
        <BorderButton>
          <img src={appleLogo} alt="Apple Logo" />
          <ObliqueLine />
          <span>Download the Mac App</span>
        </BorderButton>
      </ButtonContainer>
      <ScrollDownContainer>
        <span>Scroll to learn more</span>
        <img src={arrowDown} alt="Arrow Down" />
      </ScrollDownContainer>
    </MainContentContainer>
  );
}
