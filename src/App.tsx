import React from 'react';
import './App.css';
import ProductCard from './components/ProductCard/ProductCard';

function App() {
  return (
    <div className='App'>
      <div className='Product'>
        <ProductCard
          title='Lime'
          image='https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/GreenLimes_jrodle.jpg'
          weight='12 pc(s)'
          price='$1.5'
          isValue={false}
        />
        <ProductCard
          title='Potato'
          image='https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg'
          weight='12 pc(s)'
          price='$1.5'
          isValue={false}
        />
      </div>
    </div>
  );
}

export default App;
