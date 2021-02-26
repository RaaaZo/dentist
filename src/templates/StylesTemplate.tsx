import PageHearts from 'components/atoms/PageHearts';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/MainTheme';
import PageWrapper from 'components/atoms/PageWrapper';
import PageLogo from 'components/atoms/PageLogo';
import Menu from 'components/organisms/Menu';
import Footer from 'components/organisms/Footer';

const StylesTemplate: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PageLogo />
      <PageHearts />
      <Menu />
      <PageWrapper>
        {children}
        <Footer />
      </PageWrapper>
    </ThemeProvider>
  );
};

export default StylesTemplate;
