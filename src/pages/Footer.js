import React from "react";
import styled from "styled-components";
import Styled from "styled-components";

const Footerr = Styled.footer`
padding: 80px 60px;
background: radial-gradient(circle, rgba(54, 54, 54,1) 0%, rgba(100, 100,100,1) 100%);
@media (max-width: 900px) {
  padding: 30px 0;
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
justify-content: space-between;
align-items: center;
margin-left: 60px;
`;
const Columnn = Styled(Column)`
@media (max-width: 900px) {
    display: none;
}
`
 const Row = Styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
grid-gap: 20px;
padding-right: 60px;
@media (max-width: 900px) {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
`;

 const Link = Styled.a`
color: rgb(202, 202, 202);
margin-bottom: 0;
font-size: 18px;
text-decoration: none;
&:hover {
    color: rgb(216, 216, 216);
    transition: 200ms ease-in;
}
`;

 const Title = Styled.p`
font-size: 24px;
color: rgb(150, 150, 150);
margin-bottom: 20px;
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
              <Columnn>
              <Title>Entertainment</Title>
                  <Link href="#">Story</Link>
              </Columnn>
              <Columnn>
              <Title>Sport</Title>
                  <Link href="#">Story</Link>
              </Columnn>
              <Columnn>
              <Title>Science</Title>
                  <Link href="#">Story</Link>
              </Columnn>
              <Columnn>
              <Title>Tech</Title>
                  <Link href="#">Story</Link>
              </Columnn>
              
            
              <Columnn>
              <Title>Health</Title>
                  <Link href="#">United States</Link>
              </Columnn>
              <Column>
              <Columnn>
              <Title>Business</Title>
                  <Link href="#">United States</Link>
              </Columnn>
              <Column></Column>
              <Title>Social Media</Title>
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