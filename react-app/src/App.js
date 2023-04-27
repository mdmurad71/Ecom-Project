import React, { Component, Fragment } from 'react';

import { HashRouter } from "react-router-dom";
import Approute from "./route/AppRoute";

class App extends Component {
  render() {
    return (
      <Fragment>
        <HashRouter>
          <Approute />
        </HashRouter>
      </Fragment>
    );
  }
}

export default App;