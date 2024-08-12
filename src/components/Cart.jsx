import React, { useContext } from "react";
import styled from "styled-components";
import { myContext } from "./store/OrderContext";

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } =
    useContext(myContext);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContainer>
      <CartTitle>Your Cart</CartTitle>
      {cart.map((item) => (
        <CartItem key={item.id}>
          <ItemInfo>
            <ItemName>{item.name}</ItemName>
            <ItemQuantity>{item.quantity}x</ItemQuantity>
            <ItemPrice>${(item.price * item.quantity).toFixed(2)}</ItemPrice>
          </ItemInfo>
          <ItemActions>
            <QuantityButton onClick={() => decrementQuantity(item.id)}>-</QuantityButton>
            <QuantityButton onClick={() => incrementQuantity(item.id)}>+</QuantityButton>
            <RemoveButton onClick={() => removeFromCart(item.id)}>Remove</RemoveButton>
          </ItemActions>
        </CartItem>
      ))}
      <TotalPrice>Total Price: ${totalPrice.toFixed(2)}</TotalPrice>
    </CartContainer>
  );
};

export default Cart;

const CartContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  width: 100%;
  max-width: 600px;
`;

const CartTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ItemName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const ItemQuantity = styled.span`
  font-size: 16px;
  color: #666;
`;

const ItemPrice = styled.span`
  font-size: 16px;
  color: #28a745;
  font-weight: bold;
`;

const ItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const QuantityButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const RemoveButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #c82333;
  }
`;

const TotalPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: right;
  margin-top: 20px;
  color: #333;
`;
