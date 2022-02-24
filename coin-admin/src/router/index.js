import React from 'react';

function index() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signUp" component={SignUp} />
                <Route exact path="/findPassword" component={Password} />
                <RouteIf
                />
            </Switch>
        </BrowserRouter>
    );
  }
  
  export default index;