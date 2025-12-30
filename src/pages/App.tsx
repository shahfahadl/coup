import styled from 'styled-components';
import { Navbar } from '../layout/navbar';
import { HeroSection } from '../page-components/hero-section';
import { MainBackground } from '../page-components/main-background';

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 20px;
`;

function App() {
  return (
    <PageContainer>
      <MainBackground />
      <ContentContainer>
        <Navbar />
        <HeroSection />
      </ContentContainer>
    </PageContainer>
  );
}

export default App;
