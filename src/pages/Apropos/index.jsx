import styled from "styled-components";
import ProposImageAccueil from "../../assets/apropos.png";


const ProposWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
// <ImageTitle>Chez vous, partout et ailleurs</ImageTitle>
const ProposContainer = styled.div`
  margin: 30px;
  padding: 60px 90px;
  display: grid;
  flex-direction: row;
  max-width: 1200px;
`;
const ProposAccueil = styled.img`
  border-radius: 25px;
  width: 1150px;
  height: 223px;
  left: 100px;
  top: 171px;
  mix-blend-mode: darken;
  color: #000000;
  opacity: 1;
  background: #e5e5e5;
`;


function Propos() {
  return (
    <ProposWrapper>
      <ProposContainer>
        <ProposAccueil src={ProposImageAccueil} />
      </ProposContainer>
    </ProposWrapper>
  );
}
export default Propos