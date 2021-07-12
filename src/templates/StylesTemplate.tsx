import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/MainTheme';
import PageWrapper from 'components/atoms/PageWrapper';
import MobileMenu from 'components/organisms/MobileMenu';
import Footer from 'components/organisms/Footer';
import DesktopNavigation from 'components/organisms/DesktopNavigation';

const StylesTemplate: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DesktopNavigation />
      <MobileMenu />

      <PageWrapper>
        {children}
        <Footer />
      </PageWrapper>
    </ThemeProvider>
  );
};

export default StylesTemplate;
