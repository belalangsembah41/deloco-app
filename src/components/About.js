import React from "react";
import styled from "styled-components";

function About() {
  return (
    <>
      <Container>
        <ImageContent>
          <img src="/images/image-5.jpg" alt="" />
        </ImageContent>
        <TextContent>
          <h1>deLoco</h1>
          <p>
            deLoco is a furniture company based in Oslo, Norway. We make
            out-of-the-ordinary furniture that balances form and function,
            inviting you to move while you sit.
          </p>
        </TextContent>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 1rem auto;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;

  @media screen and (max-width: 980px) {
    flex-direction: column;
  }
`;

const ImageContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 15px;
  }

  @media screen and (max-width: 980px) {
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }
`;

const TextContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  /* background-color: antiquewhite; */

  h1 {
    font-size: 38px;
  }

  p {
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    margin-top: 18px;
    width: 100%;
  }

  @media screen and (max-width: 980px) {
    align-items: center;
    text-align: center;
    margin: 20px auto;
    border-bottom: 1px solid #999;
    width: 90%;

    p {
      margin-bottom: 20px;
    }
  }
`;

export default About;
