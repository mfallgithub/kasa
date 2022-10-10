import styled from "styled-components";
import ProposImageAccueil from "../../assets/apropos.png";
import Collapsible from "./collapse";
import "../../utils/style/Propos/css/Collapsible.css";

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
        <ContainerCollapses className="Collapsible">
          <Collapsible label="Fiabilité">
            <h1>Fiabilité</h1>
            <p>
              The collapsible component puts long sections of the information
              under a block enabling users to expand or collapse to access its
              details.
            </p>
          </Collapsible>
          <hr />
          <Collapsible label="Respect">
            <h1>Prerequisite</h1>
            <p>
              I am going to assume that you know the basics like how a component
              works, how useState works, and how to set up React. I will only
              focus on building the project and though this is for an absolute
              beginner who would like to know how useEffect and useRef work.
            </p>
          </Collapsible>
          <hr />
          <Collapsible label="Service">
            <h1>Service</h1>
            <p>
              This article will teach you more about the useState hook, useRef
              hook, and animation in React; we will make simple React
              collapsible components, useful for all kinds of apps. This
              collapsible element can be shown or hidden by clicking a button.
            </p>
          </Collapsible>
          <hr />
          <Collapsible label="Responsabilité">
            <h1>Responsabilité</h1>
            <p>
              I am going to assume that you know the basics like how a component
              works, how useState works, and how to set up React. I will only
              focus on building the project and though this is for an absolute
              beginner who would like to know how useEffect and useRef work.
            </p>
          </Collapsible>
          <hr />
        </ContainerCollapses>
      </ProposContainer>
    </ProposWrapper>
  );
}
export default Propos;
