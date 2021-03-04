import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'hooks/ScrollToTop';
import Loader from 'components/atoms/Loader';
import StylesTemplate from 'templates/StylesTemplate';

const HomePage = React.lazy(() => import('pages/HomePage'));
const ServicesPage = React.lazy(() => import('pages/ServicesPage'));
const OfficePage = React.lazy(() => import('pages/OfficePage'));
const ContactPage = React.lazy(() => import('pages/ContactPage'));
const SingleServicePage = React.lazy(() => import('pages/SingleServicePage'));
const NotFound = React.lazy(() => import('pages/404'));

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <StylesTemplate>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/uslugi/:name' component={SingleServicePage} />
            <Route path='/uslugi' component={ServicesPage} />
            <Route path='/gabinet' component={OfficePage} />
            <Route path='/kontakt' component={ContactPage} />
            <Route path='/:error' component={NotFound} />
          </Switch>
        </Suspense>
      </StylesTemplate>
    </Router>
  );
};

export default App;
