import React from 'react';
import HNavbar from '../components/HNavbar'
import { Row } from 'react-bootstrap'
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from '../components/Home'
import Film from '../components/Film'
import Janr from '../components/Janr'
import People from '../components/People'
import Serial from '../components/Serial';
import Jan from '../components/Jan'
import Tv from '../components/Tv'
import Movie from '../components/Movie'

function App() {
    return (
        <div>
            <HNavbar />
            <Row>
                <div className=" w-75">
                    <Switch>
                        <Route path="/serial" component={Serial} />
                        <Route path="/Film" component={Film} />
                        <Route path="/People" component={People} />
                        <Route path="/janr/:id" component={Jan} />
                        <Route path="/Tv/:i" component={Tv} />
                        <Route path="Movie" component={Movie} />
                        <Route path='/' component={Home} /> 
                    </Switch>
                </div>
                <p style={{ width: 350 }}>
                    <Janr />
                </p>
            </Row>
        </div>
    );
}

export default App;
