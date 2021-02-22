import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import StylesTemplate from './templates/StylesTemplate';
import ServicesPage from 'pages/ServicesPage';
import OfficePage from 'pages/OfficePage';
import ContactPage from 'pages/ContactPage';
import ScrollToTop from 'hooks/ScrollToTop';
import SingleServicePage from 'pages/SingleServicePage';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <StylesTemplate>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/uslugi/:name' component={SingleServicePage} />
          <Route path='/uslugi' component={ServicesPage} />
          <Route path='/gabinet' component={OfficePage} />
          <Route path='/kontakt' component={ContactPage} />
        </Switch>
      </StylesTemplate>
    </Router>
  );
};

export default App;
