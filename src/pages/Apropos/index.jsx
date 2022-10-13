import styled from "styled-components";
import ProposImageAccueil from "../../assets/apropos.png";
import "../../utils/style/Propos/css/Collapsible.css";
import Collapse from "./collapse";
const ProposWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-row: 1fr;
`;
const ProposContainer = styled.div`
  margin: 30px;
  padding: 60px 90px;
  display: grid;
  flex-direction: row;
  width: 1023px;
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

const ContainerCollapses = styled.div`
  padding: 30px;
  display: grid;
  flex-direction: row;
  width: 1200px;
  align-items: center;
`;

function Propos() {
  return (
    <ProposWrapper>
      <ProposContainer>
        <ProposAccueil src={ProposImageAccueil} />
        <ContainerCollapses>
          <Collapse label="Fiabilité">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </Collapse>
          <hr />
          <Collapse label="Respect">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </Collapse>
          <hr />
          <Collapse label="Service">
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          </Collapse>
          <hr />
          <Collapse label="Responsabilité">
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </Collapse>
        </ContainerCollapses>
      </ProposContainer>
    </ProposWrapper>
  );
}
export default Propos;
