import React, {Component} from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

import adminDashboard from './components/adminDashboard';
import financeDashboard from './components/financeDashboard';
import reportDashboard from './components/reportDashboard';

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

import manageTicketType from './components/manageTicketType';
import editTicketType from './components/editTicketType';

import addRevenue from './components/addRevenue';
import addExpenses from './components/addExpenses';
import searchReport from './components/searchReport';




class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                      <Route exact path='/' component={adminDashboard}/>
                      <Route path='/financeDashboard' component={financeDashboard}/>
                      <Route path='/reportDashboard' component={reportDashboard}/>

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

                      <Route path='/manageTicketType' component={manageTicketType}/>
                      <Route path='/editTicketType/:id' component={editTicketType}/>

                      <Route path='/addRevenue' component={addRevenue}/>
                      <Route path='/addExpenses' component={addExpenses}/>
                      <Route path='/searchReport' component={searchReport}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;