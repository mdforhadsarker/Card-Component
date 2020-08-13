import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import css from '@styled-system/css';

export const ProductCardWrapper = styled.div(
  css({
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    position: 'relative',
    fontFamily: 'inherit',
    borderRadius: 'base',
    cursor: 'pointer'
  })
);

export const ButtonText = styled.span`
  @media (max-width: 767px) {
    display: none;
  }
`;
export const ProductInfo = styled.div`
  padding: 20px 25px 30px;
  @media (max-width: 767px) {
    padding: 15px 20px;
    min-height: 123px;
  }
  .product-title {
    font-family: ${themeGet('fonts.body', 'sans-serif')};
    font-size: ${themeGet('fontSizes.base', '15')}px;
    font-weight: ${themeGet('fontWeights.bold', '700')};
    color: ${themeGet('colors.text.bold', '#0D1136')};
    margin: 0 0 7px 0;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media (max-width: 767px) {
      font-size: 14px;
      margin: 0 0 5px 0;
    }
  }
  .product-weight {
    font-family: ${themeGet('fonts.body', 'sans-serif')};
    font-size: ${themeGet('fontSizes.sm', '13')}px;
    font-weight: ${themeGet('fontWeights.regular', '400')};
    color: ${themeGet('colors.text.regular', '#77798c')};
    @media (max-width: 767px) {
      font-size: ${themeGet('fontSizes.xs', '12')}px;
    }
  }
  .product-meta {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 767px) {
      min-height: 32px;
    }
    .productPriceWrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .product-price {
        font-family: ${themeGet('fonts.body', 'sans-serif')};
        font-size: ${themeGet('fontSizes.base', '15')}px;
        font-weight: ${themeGet('fontWeights.bold', '700')};
        color: ${themeGet('colors.primary.regular', '#009E7F')};
        @media (max-width: 767px) {
          font-size: calc(${themeGet('fontSizes.base', '15')}px - 1px);
        }
      }
      .discountedPrice {
        font-family: ${themeGet('fonts.body', 'sans-serif')};
        font-size: ${themeGet('fontSizes.sm', '13')}px;
        font-weight: ${themeGet('fontWeights.regular', '400')};
        color: ${themeGet('colors.yellow.hover', '#FBB979')};
        font-style: italic;
        padding: 0 5px;
        position: relative;
        overflow: hidden;
        position: absolute;
        top: -20px;
        left: -4px;
        &:before {
          content: '';
          width: 100%;
          height: 1px;
          display: inline-block;
          background-color: ${themeGet('colors.yellow.hover', '#FBB979')};
          position: absolute;
          top: 50%;
          left: 0;
        }
      }
    }
    .cart-button {
      border: 2px solid ${themeGet('colors.gray.200', '#f7f7f7')};
      border-radius: ${themeGet('radii.big', '18px')};
      height: 36px;
      padding-left: 17px;
      padding-right: 17px;
      font-size: ${themeGet('fontSizes.sm', '13')}px;
      font-weight: ${themeGet('fontWeights.bold', '700')};
      @media (max-width: 767px) {
        width: 36px;
        height: 36px;
        padding: 0;
        border-radius: 50%;
      }
      .btn-text {
        padding: 0 0 0 6px;
        @media (max-width: 767px) {
          display: none;
        }
      }
      &:hover {
        color: ${themeGet('colors.white', '#ffffff')};
        background-color: ${themeGet('colors.primary.regular', '#009e7f')};
        border-color: ${themeGet('colors.primary.regular', '#009e7f')};
      }
      svg {
        fill: currentColor;
        @media (max-width: 767px) {
          margin: 0;
        }
      }
    }
    @media (max-width: 767px) {
      .quantity {
        width: 32px;
        height: 90px;
        display: block;
        flex-shrink: 0;
        position: absolute;
        bottom: 15px;
        right: 15px;
        z-index: 1;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);
      }
      button {
        width: 100%;
        height: 27px;
      }
      .incBtn {
        top: 0;
        justify-content: center;
      }
      .decBtn {
        top: auto;
        bottom: 0;
        justify-content: center;
      }
      input[type='number'] {
        left: 0;
        font-size: calc(${themeGet('fontSizes.base', '15')}px - 1px);
        height: calc(100% - 54px);
        position: absolute;
        top: 27px;
        width: 100%;
        color: ${themeGet('colors.white', '#ffffff')};
      }
    }
  }
`;
