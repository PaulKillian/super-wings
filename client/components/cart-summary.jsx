import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  return (
    <div className="col-12">
      {this.props.cartItem.map(item => {
        return (
          <CartSummaryItem
            key={item.productId}
            image={item.image}
            name={item.name}
            price={item.price}
            description={item.shortDescription}
          />
        );
      })}
    </div>
  );
}

export default CartSummary;
