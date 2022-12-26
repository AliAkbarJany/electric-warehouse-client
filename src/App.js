import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Shared/Header/Header';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Inventory from './Pages/Home/Inventory/Inventory';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageItems from './Pages/Home/ManageItems/ManageItems';
import AddDevice from './Pages/Home/AddDevice/AddDevice';
import MyItems from './Pages/Home/MyItems/MyItems';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/manageItems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/addDevices' element={<AddDevice></AddDevice>}></Route>
        <Route path='/myItems' element={<MyItems></MyItems>}></Route>

        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        } >
          
        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
