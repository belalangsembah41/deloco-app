import React from "react";
import styled from "styled-components";

function Hero() {
  return (
    <Container>
      <TextContent>
        <h1>Find Your Best Home Decoration</h1>
        <p>
          The process of creating our furniture and all of our hand crafted
          pieces, requires an artistry and a deep knowledge of each craft from
          our makers.
        </p>
      </TextContent>
      <ImageContent>
        <img src="/images/image-4.jpg" alt="" />
      </ImageContent>
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  max-width: 1400px;
  padding: 3rem 2rem;
  display: flex;
  margin: 0 auto;

  @media screen and (max-width: 980px) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  width: 100%;
  padding: 2rem 2rem 2rem 0;
  margin: 0 5px;

  h1 {
    font-size: 38px;
  }

  p {
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    margin-top: 18px;
  }

  @media screen and (max-width: 980px) {
    margin: 0 auto;
    text-align: center;
    border-bottom: 1px solid #999;
  }
`;

const ImageContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;

  img {
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 15px;
  }

  @media screen and (max-width: 1090px) {
    img {
      width: 400px;
      height: 400px;
    }
  }

  @media screen and (max-width: 980px) {
    margin: 20px auto;

    img {
      width: 450px;
    }
  }

  @media screen and (max-width: 540px) {
    img {
      width: 400px;
    }
  }
`;

export default Hero;
