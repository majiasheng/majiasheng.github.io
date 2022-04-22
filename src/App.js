import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import './styles/App.css';
import NotFound from './pages/404';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">

      <Router>

        <Switch>
          <Route path="/">
            <div className="navigation">
              <NavigationBar />
            </div>
            <div className="content">
              <Switch>
                {Object.values(routes).map((r) => (
                  <Route exact path={r.path} component={r.component} key={r.name} />
                ))}
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </div>
          </Route>

          {/* <Route exact path="/">
              new home
            </Route> */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
