import './App.css';
import React, { useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser
 from './pages/EditUser';
function App() {

  // This useEffect is for disable the right in entire application
    useEffect(() => {
      const handleContextmenu = (e) => {
        e.preventDefault();
      };
      document.addEventListener("contextmenu", handleContextmenu);
      return function cleanup() {
        document.removeEventListener("contextmenu", handleContextmenu);
      };
    }, []);

  return (
      <Router>
        <Routes>
            <Route path = '/' element= {<Home />}></Route>
            <Route path = '/addUser' element= {<AddUser />}></Route>
            <Route path = '/editUser/:id' element= {<EditUser />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
