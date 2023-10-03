import React ,{Fragment,useState,useEffect, useContext} from 'react';
import './App.css';
import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import AuthContext from './store/AuthContext';
function App() {

  const authCxt=useContext(AuthContext);

  return (
      <><MainHeader /><main>
      {!authCxt.isLoggedIn && <Login />}
      {authCxt.isLoggedIn && <Home />}
    </main></>

  );
}

export default App;
