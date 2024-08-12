import React, { useContext } from "react";
import styled from "styled-components";
import Img1 from "../assets/img/images/1.png";
import Img2 from "../assets/img/images/2.png";
import Img3 from "../assets/img/images/3.png";
import Img4 from "../assets/img/images/4.png";
import Img5 from "../assets/img/images/5.png";
import Img6 from "../assets/img/images/6.png";
import { myContext } from "./store/OrderContext";

const OrderFormFood = () => {
  const { addToCart } = useContext(myContext);

  const products = [
    { id: 1, name: "Strawberries", price: 5.0, image: Img1 },
    { id: 2, name: "Onions", price: 3.0, image: Img2 },
    { id: 3, name: "Tomatoes", price: 1.0, image: Img3 },
    { id: 4, name: "Brinjal", price: 4.0, image: Img4 },
    { id: 5, name: "Broccoli", price: 8.0, image: Img5 },
    { id: 6, name: "Potatoes", price: 11.0, image: Img6 },
  ];

  return (
    <ContainerStyled>
      <HeaderStyled>ORGANIC PRODUCTS</HeaderStyled>
      <CardContainer>
        {products.map((product) => (
          <Card key={product.id} onClick={() => addToCart(product)}>
            <ImageStyled src={product.image} alt={product.name} />
            <TextContainer>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
            </TextContainer>
          </Card>
        ))}
      </CardContainer>
    </ContainerStyled>
  );
};

export default OrderFormFood;

const ContainerStyled = styled.div`
  min-width: 100%;
  height: auto;
  border: 4px solid #333;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #f9f9f9;
`;

const HeaderStyled = styled.h1`
  text-align: center;
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const Card = styled.div`
  height: 300px;
  width: 220px;
  border: 2px solid #ddd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageStyled = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const TextContainer = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
`;

const ProductName = styled.p`
  margin: 5px 0;
  font-weight: bold;
  font-size: 18px;
  color: #333;
`;

const ProductPrice = styled.span`
  color: #28a745;
  font-weight: bold;
  font-size: 16px;
`;
