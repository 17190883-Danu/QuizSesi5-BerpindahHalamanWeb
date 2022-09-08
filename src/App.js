import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import {Home} from './component/Home';
import {EditUser} from './component/EditUser';
import {AddUser} from './component/AddUser';
import { GlobalProvider } from './context/GlobalState';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Routes>
              <Route element={<Home/>} path="/"></Route>
              <Route element={<AddUser/>} path="/adduser"></Route>
              <Route element={<EditUser/>} path="/edituser/:id"></Route>
          </Routes>
        </Router>
      </GlobalProvider>
         
    </div>
  );
}

export default App;
