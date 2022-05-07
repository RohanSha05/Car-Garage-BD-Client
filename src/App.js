import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Items from './Pages/Inventory/Items/Items';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Items></Items>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
