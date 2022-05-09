import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Items from './Pages/Inventory/Items/Items';
import ItemDetail from './Pages/Inventory/ItemDetail/ItemDetail';
import AddItems from './Pages/AddItems/AddItems';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/item' element={<Items></Items>}></Route>
        <Route path="/item/:itemId" element={
          <RequireAuth>
            <ItemDetail></ItemDetail>
          </RequireAuth>
        }></Route>
        <Route path="/additems" element={<AddItems></AddItems>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
