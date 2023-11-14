import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route, Link, Router} from 'react-router-dom';
import ListUser from  './components/listUser';
import CreateUser from  './components/createUser';
import EditUser from './components/EditUser';
import DeleteUser from './components/deleteUser';

function App() {
   return(
    <div className="App">
      <h3>CRUD ReactPHP - lonelyssh</h3>

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">List Users</Link>
            </li>
            <li>
              <Link to="/user/create">Create User</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser />} />
          <Route path="/user/create" element={<CreateUser />} />
          <Route path="/user/:id/edit" element={<EditUser />} />
          <Route path="/user/:id/delete" element={<DeleteUser />} />
        </Routes>
      </BrowserRouter>
    </div>
   )
}

export default App;