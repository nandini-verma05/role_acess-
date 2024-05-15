
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';
import User from './components/User';
import Navbar from './components/Navbar';
import AdminPage from './components/AdminPage';
import UserPage from './components/UserPage';

function App() {
  const Users = {
    Registerd:"rigistered",
    Public:"public",
    Admin:"admin",
  }
  const Current_user = Users.Admin;

  return (
    <BrowserRouter>
 <Navbar current_user={Current_user} />
 <Routes>
  <Route path='/' element={<Home/>} ></Route>
  <Route path='/admin' element={<AdminPage/>}></Route>
  <Route path='/user' element={<UserPage/>}></Route>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
