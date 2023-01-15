import React from "react";
import styled from "styled-components";
import { FaBoxOpen, FaLeaf, FaShippingFast } from "react-icons/fa";

function Collection() {
  return (
    <>
      <Container>
        <CardContainer>
          <IconBox>
            <FaBoxOpen />
          </IconBox>
          <CardTitle>
            <h2>All Collections</h2>
          </CardTitle>
        </CardContainer>
        <CardContainer>
          <IconLeaf>
            <FaLeaf />
          </IconLeaf>
          <CardTitle>
            <h2>Made by Natural</h2>
          </CardTitle>
        </CardContainer>
        <CardContainer>
          <IconShipp>
            <FaShippingFast />
          </IconShipp>
          <CardTitle>
            <h2>Shipping The World</h2>
          </CardTitle>
        </CardContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 1400px;
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f5efd9;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const CardContainer = styled.div`
  width: 12rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e7ce77;
  border-radius: 15px;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    margin: 20px 0;
    width: 50%;
  }
`;

const IconBox = styled(FaBoxOpen)`
  display: block;
  font-size: 40px;
`;

const IconLeaf = styled(FaLeaf)`
  display: block;
  font-size: 40px;
`;

const IconShipp = styled(FaShippingFast)`
  display: block;
  font-size: 40px;
`;

const CardTitle = styled.div`
  margin-top: 15px;
  text-align: center;

  h2 {
    font-size: 20px;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    margin-left: 20px;
  }
`;

export default Collection;
