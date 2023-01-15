import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <NewsletterContainer>
        <Newsletter>
          <h1>Join Our Newsletter!!</h1>
          <h2>We'll send you a nice letter once per week. No Spam</h2>
        </Newsletter>
        <NewsletterForm>
          <input type="email" name="email" placeholder="Email" />
        </NewsletterForm>
      </NewsletterContainer>

      <FooterMain>
        <FooterAbout>
          <Logo>deLoco</Logo>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et
            unde vitae corrupti amet consequatur illum. Quas, soluta, odit
            molestias ut sint in ipsum veniam aperiam quasi aspernatur qui!
            Sapiente, neque. Minima quis quasi necessitatibus esse quas, atque
            recusandae alias commodi corporis modi nostrum saepe odit in!
            Minima, nostrum eligendi?
          </p>
        </FooterAbout>
        <FooterList>
          <FooterListTitle>Product</FooterListTitle>
          <FooterItem>Machine</FooterItem>
          <FooterItem>Electronic</FooterItem>
          <FooterItem>Furniture</FooterItem>
          <FooterItem>Home Living</FooterItem>
        </FooterList>

        <FooterList>
          <FooterListTitle>Company</FooterListTitle>
          <FooterItem>About Us</FooterItem>
          <FooterItem>Careers</FooterItem>
          <FooterItem>News</FooterItem>
          <FooterItem>Media Kit</FooterItem>
          <FooterItem>Contact</FooterItem>
        </FooterList>

        <FooterList>
          <FooterListTitle>Social Media</FooterListTitle>
          <FooterItem>Instagram</FooterItem>
          <FooterItem>Facebook</FooterItem>
          <FooterItem>Twitter</FooterItem>
          <FooterItem>Youtube</FooterItem>
          <FooterItem>LinkedIn</FooterItem>
        </FooterList>
      </FooterMain>
      <FooterCopy>&copy;2022. deLoco Allrights Reserved.</FooterCopy>
    </FooterContainer>
  );
};

const FooterContainer = styled.section`
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f5efd9;
  overflow-x: hidden;
`;

const NewsletterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3rem;
  background-color: #ded2a6;

  @media screen and (max-width: 980px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

const Newsletter = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 1rem;
  width: 50%;
  line-height: 2rem;

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 20px;
  }

  @media screen and (max-width: 980px) {
    text-align: center;
    align-items: center;
    width: 100%;
    line-height: 2.5rem;

    h1 {
      font-size: 36px;
    }

    h2 {
      font-size: 26px;
    }
  }
`;

const NewsletterForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 50%;

  input {
    width: 100%;
    min-width: 450px;
    height: 2rem;
    border: 1px solid rgba(0, 0, 0, 0.5);
    outline: none;
    border-radius: 10px;
    padding-left: 0.7rem;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
  }

  @media screen and (max-width: 980px) {
    width: 50%;
  }
`;

const FooterMain = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 980px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

const FooterAbout = styled.div`
  width: 600px;

  p {
    font-size: 18px;
    padding-right: 2rem;
    font-family: "Roboto", sans-serif;
  }
`;

const Logo = styled.h1`
  font-size: 30px;
  margin-bottom: 10px;
`;

const FooterList = styled.ul`
  margin: 0 2rem;

  @media screen and (max-width: 980px) {
    margin: 2rem 4rem 0 0;
  }
`;

const FooterListTitle = styled.h4`
  font-size: 24px;
`;

const FooterItem = styled.li`
  margin-top: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
`;

const FooterCopy = styled.h4`
  font-family: "Roboto", sans-serif;
  padding: 1rem;
  width: 100%;
  height: 3rem;
  max-width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ded2a6;
`;

export default Footer;
