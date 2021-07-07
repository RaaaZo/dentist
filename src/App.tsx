import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'hooks/ScrollToTop';
import StylesTemplate from 'templates/StylesTemplate';
import NotFound from 'pages/404';
import ContactPage from 'pages/ContactPage';
import HomePage from 'pages/HomePage';
import OfficePage from 'pages/OfficePage';
import ServicesPage from 'pages/ServicesPage';
import SingleServicePage from 'pages/SingleServicePage';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <StylesTemplate>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/uslugi/:name' component={SingleServicePage} />
          <Route path='/uslugi' component={ServicesPage} />
          <Route path='/gabinet' component={OfficePage} />
          <Route path='/kontakt' component={ContactPage} />
          <Route path='/:error' component={NotFound} />
        </Switch>
      </StylesTemplate>
    </Router>
  );
};

export default App;
