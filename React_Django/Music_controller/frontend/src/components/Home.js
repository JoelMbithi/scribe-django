import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Booking from './Booking';
import PlayDesk from './PlayDesk';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <Router>
               <Switch>
                   <Route exact path='/' render={() => <p>Welcome to the Home Page of the Music Controller App</p>} />
                   <Route path='/booking' component={Booking} />
                   <Route path='/playDesk/:playDeskCode' component={PlayDesk} />
                   {/* Add more routes as needed */}
               </Switch>
           </Router>
        );
    }
}