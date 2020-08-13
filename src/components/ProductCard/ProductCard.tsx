import React from 'react';
import Image from '../image/Image';
import { ProductImageWrapper } from '../image/ImageStyle';
import {
  ProductCardWrapper,
  ProductInfo,
  ButtonText
} from '../ProductCard/ProductInfoStyle';
import { Button } from '../Button/Button';
import { CartIcon } from '../assets/icons/CartIcon';
import { Counter } from '../Counter/Counter';
import { useCart } from '../../Contexts/Cart/UseCart';
import { cartAnimation } from 'utils/cart-animation';

const ProductCard = ({ title, image, weight, price, data }) => {
  const { addItem, removeItem, getItem, isInCart } = useCart();
  const handleAddClick = e => {
    e.stopPropagation();
    addItem(data);
    if (!isInCart(data.id)) {
      cartAnimation(e);
    }
  };
  const handleRemoveClick = e => {
    e.stopPropagation();
    removeItem(data);
  };
  return (
    <ProductCardWrapper className='product-card'>
      <ProductImageWrapper>
        <Image
          url={image}
          className='product-image'
          style={{ position: 'relative' }}
          alt={title}
        />
      </ProductImageWrapper>
      <ProductInfo>
        <h3 className='product-title'>{title}</h3>
        <span className='product-weight'>{weight}</span>
        <div className='product-meta'>
          <div className='productPriceWrapper'>
            <span className='product-price'>{price}</span>
          </div>
          {!isInCart(data.id) ? (
            <Button
              className='cart-button'
              variant='secondary'
              borderRadius={100}
              onClick={handleAddClick}
            >
              <CartIcon mr={2} />
              <ButtonText>
                <span>Cart</span>
              </ButtonText>{' '}
            </Button>
          ) : (
            <Counter
              value={getItem(data.id).quantity}
              onDecrement={handleRemoveClick}
              onIncrement={handleAddClick}
            />
          )}
        </div>
      </ProductInfo>
    </ProductCardWrapper>
  );
};

export default ProductCard;
