import React from 'react';
import Sticky from 'react-stickynode';
import './StickyCartStyle.css';

const StickyCart = () => (
  <Sticky enabled={true} top={1000}>
    <div className='sticky'>
      <span>I AM A STICKY COMPONENT</span>
    </div>
  </Sticky>
);

export default StickyCart;
