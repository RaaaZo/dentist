import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import StylesTemplate from './templates/StylesTemplate';
import ServicesPage from 'pages/ServicesPage';
import OfficePage from 'pages/OfficePage';
import ContactPage from 'pages/ContactPage';
import ScrollToTop from 'hooks/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <StylesTemplate>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/uslugi' component={ServicesPage} />
          <Route exact path='/gabinet' component={OfficePage} />
          <Route exact path='/kontakt' component={ContactPage} />
        </Switch>
      </StylesTemplate>
    </Router>
  );
};

export default App;
