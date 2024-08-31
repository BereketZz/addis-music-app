// Footer.tsx
import styled from '@emotion/styled';
const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px 0;
  width: 100%;
  margin-top: auto; /* This pushes the footer to the bottom of the content */
`;

const Footer = () => (
  <FooterContainer>
    <p>Developed by Bereket with ❤️</p>
  </FooterContainer>
);

export default Footer;

