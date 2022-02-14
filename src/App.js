import { useState, useEffect } from 'react';
import { getUser, logout } from './services/fetch-utils';
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
  const [currentUser, setCurrentUser] = useState('');
  //add useEffect to user to fetch user, inject into userState on load
  useEffect(() => {
    async function fetchUser() {
      const data = getUser();

      setCurrentUser(data);
    }

    fetchUser();
  }, []);
  // handleLogout (call func, clear state)
  async function handleLogout() {
    await logout();

    currentUser('');
  }

  return (
    <div className="App">
      <header className="header">
        {/* if user: render links (book-list, create, userProfile) */}
        {
          currentUser &&
          <>
            <NavLink to="/books">
              Books
            </NavLink>
            <NavLink to="/create">
              Create Book
            </NavLink>
            <NavLink to="/profile">
              Profile
            </NavLink>
            <button onClick={handleLogout}>Logout</button>
          </>
        }
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
