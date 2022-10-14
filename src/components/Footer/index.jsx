import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../assets/footerlogo.png";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  align-items: center;
  margin-top: 70px;
  padding-top: 50px;
  padding-bottom: 50px;

  height: 80px;
`;

const FooterLogo = styled.img`
  width: 122px;
  height: 40px;
`;

const FooterText = styled.p`
  color: white;
  font-size: 24px;
`;

function Footer() {
  return (
    <FooterContainer>
      <Link to="/">
        <FooterLogo src={Logo} />
      </Link>
      <FooterText>© 2020 Kasa. All rights reserved</FooterText>
    </FooterContainer>
  );
}

export default Footer;
