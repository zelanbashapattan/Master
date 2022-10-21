import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser
 from './pages/EditUser';
function App() {
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
