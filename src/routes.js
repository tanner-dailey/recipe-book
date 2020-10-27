import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import General from './Components/General/General';
import New from './Components/New/New';
import Personal from './Components/Personal/Personal';
import Profile from './Components/Profile/Profile';
import Single from './Components/Single/Single';

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/general' component={General} />
        <Route path='/new' component={New} />
        <Route path='/profile' component={Profile} />
        <Route path='/personal' component={Personal} />
        <Route path='/recipe/:recipeid' component={Single} />
    </Switch>
)