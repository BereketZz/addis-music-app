// Header.tsx
import styled from '@emotion/styled';
import musicImage from '../assets/tru.jpg'; 


const HeaderContainer = styled.header`
  background-image: url(${musicImage});
  background-size: cover;
  background-position: center;
  height: 300px; /* Adjust as needed */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin: 10px 0 0;
`;

const Header = () => (
  <HeaderContainer>
    <Title>Addis Music App</Title>
    <Subtitle>Your favorite music, in one place</Subtitle>
  </HeaderContainer>
);

export default Header;
