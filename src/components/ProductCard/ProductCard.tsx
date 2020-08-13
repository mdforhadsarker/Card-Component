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

const ProductCard = ({ title, image, weight, price,isValue }) => {
  const handleAddClick = e => {
    e.stopPropagation();
  
  };
  const handleRemoveClick = e => {
    e.stopPropagation();
  };
  return (
    <ProductCardWrapper className='ProductCard'>
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
          {!isValue ? (
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
              value={1}
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
