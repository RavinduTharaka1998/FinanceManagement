import React, {Component} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';






class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                        {/* <Route exact path='/' component={Landing}/> */}
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;