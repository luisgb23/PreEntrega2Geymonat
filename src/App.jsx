import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartView from './components/CartView/CartView';
import NotFound from './components/NotFound/NotFound';
import { CartProvider } from './context/CartContext'


function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Listado de productos'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer greeting={'Detalle de producto'} />} />
            <Route path='/cart' element={<CartView/>}>Carrito</Route>
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
