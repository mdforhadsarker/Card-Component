import React from 'react';
import './App.css';
import ProductCard from './components/ProductCard/ProductCard';
import { AppProvider } from 'Contexts/app/AppProvider';
import { CartProvider } from 'Contexts/Cart/UseCart';
import AppLayout from 'layouts/app-layout';
import CartPopUp from './features/carts/cart-popup';

function App() {
  return (
    <div className='App'>
      <div className='Product'>
        <AppProvider>
          <CartProvider>
            <AppLayout>
              <ProductCard
                title='Lime'
                image='https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/GreenLimes_jrodle.jpg'
                weight='12 pc(s)'
                price='$1.5'
                data='data'
              />

              <CartPopUp mobile={true} />
            </AppLayout>
          </CartProvider>
        </AppProvider>
      </div>
    </div>
  );
}

export default App;
