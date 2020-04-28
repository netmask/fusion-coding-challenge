import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, NavLink
} from "react-router-dom";

import CurrentCasesVisualisation from "./currentCasesVisualisation";
import CurrentRecoveredVisualisation from "./currentRecoveredVisualisation";

import fetchData from './api';

import './App.scss';



class App extends React.Component {
    state = {};

    componentDidMount() {
        fetchData().then(json => this.setState({data: json}));
    }

    render(){
        return (
            <Router>
                <section className="hero is-success is-large">
                    <div className="hero-head">
                        <div className="tabs is-boxed is-medium is-centered">
                            <div className="container">
                                <ul>
                                    <NavLink to="/" activeClassName="is-active">
                                        <li>Recovered</li>
                                    </NavLink>

                                    <NavLink to="/current-infected" activeClassName="is-active">
                                        <li>Current Cases</li>
                                    </NavLink>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="is-centered">
                                <Switch>
                                    <Route path="/current-infected">

                                        {this.state.data && <CurrentCasesVisualisation data={this.state.data}/>}
                                    </Route>
                                    <Route path="/">
                                        {this.state.data && <CurrentRecoveredVisualisation data={this.state.data}/>}
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </section>
            </Router>

        );
    }
}


export default App;
