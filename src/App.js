import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Items from './Pages/Inventory/Items/Items';
import ItemDetail from './Pages/Inventory/ItemDetail/ItemDetail';
import AddItems from './Pages/AddItems/AddItems';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/item' element={<Items></Items>}></Route>
        <Route path="/item/:itemId" element={<ItemDetail></ItemDetail>}></Route>
        <Route path="/additems" element={<AddItems></AddItems>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
