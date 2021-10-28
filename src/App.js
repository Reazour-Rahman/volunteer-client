import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddEvents from './comonents/Home/AddEvents/AddEvents';
import EventsAdded from './comonents/Home/EventsAdded/EventsAdded';
import Home from './comonents/Home/Home/Home';
import RegisterVolunteer from './comonents/Home/RegisterVolunteer/RegisterVolunteer';
import ValunteerRegisterList from './comonents/Home/ValunteerRegisterList/ValunteerRegisterList';
import Header from './comonents/Shared/Header/Header';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Switch>
    
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>
          
          <Route path="/registerVolunteer/:volunteerId">
            <RegisterVolunteer></RegisterVolunteer>
          </Route>

          <Route path="/volunteersRegisterList">
            <ValunteerRegisterList></ValunteerRegisterList>
          </Route>

          <Route path="/addEvents">
            <AddEvents></AddEvents>
          </Route>

          <Route path="/eventsAdded">
            <EventsAdded></EventsAdded>
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;