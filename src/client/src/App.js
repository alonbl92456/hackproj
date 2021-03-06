import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import {loadResource} from './store/actions/index';
import './App.css';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import '@fortawesome/fontawesome-free/css/all.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css'

// Containers
import { DefaultLayout } from './containers';
// Pages
import { Login, Page404, Page500, Register } from './views/Pages';

import * as serverAPI from './shared/serverAPI';

// import { renderRoutes } from 'react-router-config';


class App extends Component {

  componentDidMount(){
   // this.props.Load(serverAPI.SAN.VMAX.CC);
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/register" name="Register Page" component={Register} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </HashRouter>
    );
  }
}


const mapStateToProps = state => {
  return {
    cc:state["/v1/api/san/vmax/cc"]
  };
}

const mapDispatchToProps = dispatch => {
  return {
     Load: (apiUrl) => dispatch(loadResource(apiUrl))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
