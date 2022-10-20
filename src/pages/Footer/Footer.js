import React from "react";
import "./Footer.css";

export function FooterContainer() {
  return (
      <Footer>
          <Footer.Wrapper>
          <Footer.Row>
          <Footer.Column>
          <Footer.Title>Home</Footer.Title>
                  <Footer.Link href="#">Marketing</Footer.Link>
              </Footer.Column>
              <Footer.Column>
              <Footer.Title>About </Footer.Title>
                  <Footer.Link href="#">Story</Footer.Link>
              </Footer.Column>
              <Footer.Column>
              <Footer.Title>Entertainment</Footer.Title>
                  <Footer.Link href="#">Story</Footer.Link>
              </Footer.Column>
              <Footer.Column>
              <Footer.Title>Sport</Footer.Title>
                  <Footer.Link href="#">Story</Footer.Link>
              </Footer.Column>
              <Footer.Column>
              <Footer.Title>Science</Footer.Title>
                  <Footer.Link href="#">Story</Footer.Link>
              </Footer.Column>
              <Footer.Column>
              <Footer.Title>Tech</Footer.Title>
                  <Footer.Link href="#">Story</Footer.Link>
              </Footer.Column>
              <Footer.Column>
            
              <Footer.Column>
              <Footer.Title>Health</Footer.Title>
                  <Footer.Link href="#">United States</Footer.Link>
              </Footer.Column>
              <Footer.Column>
              <Footer.Title>Business</Footer.Title>
                  <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                  <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                  <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                  <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
              </Footer.Column>
          </Footer.Row>
          </Footer.Wrapper>
      </Footer>
  )
}
export default Footer;