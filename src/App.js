import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    return(
      setCartIsShown(true)
    );
  };

  const hideCartHandler = () =>{
    return(
      setCartIsShown(false)
    );
  };
  
  return (
    <CartProvider>
      <Header onShownCart={showCartHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <main>
        <Meals />
      </main>
      <footer style={{textAlign: 'center', color: 'white'}}>
        Copyright by <b>Shohriyormirzo</b>
      </footer>
    </CartProvider>
  );
}

export default App;
