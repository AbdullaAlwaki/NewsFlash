import React from "react";
import Styled from "styled-components";

const Footerr = Styled.footer`
padding: 80px 60px;
background: radial-gradient(circle, rgba(92,39,251,1) 0%, rgba(112,71,247,1) 100%);
@media (max-width: 1000px) {
  padding: 70px 30px;
}
`;

const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`

 const Column = Styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

 const Row = Styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
grid-gap: 20px;
@media (max-width: 1000px) {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
`;

 const Link = Styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;
&:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
}
`;

 const Title = Styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;


function Footer() {
  return (
      <Footerr>
          <Wrapper>
          <Row>
          <Column>
          <Title>Home</Title>
                  <Link href="#">Marketing</Link>
              </Column>
              <Column>
              <Title>About </Title>
                  <Link href="#">Story</Link>
              </Column>
              <Column>
              <Title>Entertainment</Title>
                  <Link href="#">Story</Link>
              </Column>
              <Column>
              <Title>Sport</Title>
                  <Link href="#">Story</Link>
              </Column>
              <Column>
              <Title>Science</Title>
                  <Link href="#">Story</Link>
              </Column>
              <Column>
              <Title>Tech</Title>
                  <Link href="#">Story</Link>
              </Column>
              
            
              <Column>
              <Title>Health</Title>
                  <Link href="#">United States</Link>
              </Column>
              <Column>
              <Title>Business</Title>
                  <Link href="#">Facebook</Link>
                  <Link href="#">Instagram</Link>
                  <Link href="#">Youtube</Link>
                  <Link href="#">Twitter</Link>
              </Column>
          </Row>
          </Wrapper>
      </Footerr>
  )
}
export default Footer;