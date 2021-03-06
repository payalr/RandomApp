import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import BattleArena from '../BattleArena';
import Menu from './Menu'
import CharacterSelect from '../CharacterSelect'
import Layout from '../../Layout'

const Home = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Menu} />
                    <Route path="/characterSelect" component={CharacterSelect} />
                    
                    <Route path="/battle" component={BattleArena} />
                </Switch>
            </Layout>
        </Router>
    );
}

export default Home;