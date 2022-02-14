import { useState, useEffect } from 'react';
import { getUser } from './services/fetch-utils';
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  Redirect
} from 'react-router-dom';

import './App.css';

function App() {
  //track user's state
  //add useEffect to user to fetch user, inject into userState on load
  // handleLogout (call func, clear state)
  return (
    <div className="App">
      <header className="header">
        {/* if user: render links (book-list, create, userProfile) */}
      </header>
      <main>
        {/* switch->route->ternary */}
        {/* if user, redirect to bookList, if no call AuthPage */}
        {/* if user, render bookList, if no call AuthPage */}
        {/* if user, render bookDetail, if no call AuthPage */}
        {/* if user, render Create, if no call AuthPage */}
        {/* if user, render Profile, if no call AuthPage */}
      </main>
    </div>
  );
}

export default App;
