import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import RouteIf, { ROLE } from "./componentns/RouteIf.js";
import Login from'./componentns/Login';
import SignUp from'./componentns/SignUp';
import Password from'./componentns/Password';
import Main from'./page/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signUp" component={SignUp} />
              <Route exact path="/findPassword" component={Password} />
              <RouteIf
                  path="/main"
                  exact
                  component={Main}
                  role={ROLE.WRITE}
              />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
