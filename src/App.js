import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Footer from './componets/layout/Footer';
import Navbar from './componets/layout/Navbar';
import Landing from './componets/layout/Landing';
import Stock from './componets/screens/Stock';
import Quote from './componets/screens/Quote';
import Register from './componets/screens/auth/Register';
import Login from './componets/screens/auth/Login';

import './App.css';

class App extends Component {
    render() {
      return (
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="Container">
              <Route exact path="/stock" component={Stock}/>
              <Route exact path="/quote" component={Quote}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login" component={Login}/>
            </div>
            <Footer/>
          </div>
        </Router>

      );
    }
}





export default App;
