import React, {Component} from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

import adminDashboard from './components/adminDashboard';
import financeDashboard from './components/financeDashboard';

import nativeTicket from './components/nativeTicket';
import addNativeTicket from './components/addNativeTicket';
import viewNativeTicket from './components/viewNativeTicket';
import editNativeTicket from './components/editNativeTicket';
import viewOneNativeTicket from './components/viewOneNativeTicket';

import foreignTicket from './components/foreignTicket';
import addForeignTicket from './components/addForeignTicket';
import viewForeignTicket from './components/viewForeignTicket';
import editForeignTicket from './components/editForeignTicket';
import viewOneForeignTicket from './components/viewOneForeignTicket';






class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                      <Route exact path='/' component={adminDashboard}/>
                      <Route path='/financeDashboard' component={financeDashboard}/>

                      <Route path='/nativeTicket' component={nativeTicket}/>
                      <Route path='/addNativeTicket' component={addNativeTicket}/>
                      <Route path='/viewNativeTicket' component={viewNativeTicket}/>
                      <Route path='/editNativeTicket/:id' component={editNativeTicket}/>
                      <Route path='/viewOneNativeTicket/:id' component={viewOneNativeTicket}/>


                      <Route path='/foreignTicket' component={foreignTicket}/>
                      <Route path='/addForeignTicket' component={addForeignTicket}/>
                      <Route path='/viewForeignTicket' component={viewForeignTicket}/>
                      <Route path='/editForeignTicket/:id' component={editForeignTicket}/>
                      <Route path='/viewOneForeignTicket/:id' component={viewOneForeignTicket}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;