import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
import { HomeStyledLink } from "../../utils/style/Home/index";
import { PropoStyledLink } from "../../utils/style/Propos/index";

const KasaLogo = styled.img`
  height: 70px;
`;
const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <KasaLogo src={Logo} />
      </Link>
      <div>
        <HomeStyledLink to="/">Accueil</HomeStyledLink>
        <PropoStyledLink to="/propos">A Propos</PropoStyledLink>
      </div>
    </NavContainer>
  );
}

export default Header;
