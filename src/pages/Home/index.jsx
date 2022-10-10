import styled from "styled-components";
import HomeImageAccueil from "../../assets/imageaccueil1.png";
import Card from "../../components/Card";


const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const HomerContainer = styled.div`
  margin: 30px;
  padding: 60px 90px;
  display: grid;
  flex-direction: row;
  max-width: 1200px;
`;
const ImageAccueil = styled.img`
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
const CardsContainer = styled.div`
  margin: 30px;
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  background: #f7f7f7;
  border-radius: 25px;
`;

var locations = require("../../data/logements.json");

function Home() {
  return (
    <HomeWrapper>
      <HomerContainer>
        <ImageAccueil src={HomeImageAccueil} />
        <CardsContainer>
          {locations.map((location, index) => (
            <Card
              key={`${location.id}-${index}`}
              title={location.title}
              cover={location.cover}
            />
          ))}
        </CardsContainer>
      </HomerContainer>
    </HomeWrapper>
  );
}

export default Home;
