import styled from "styled-components";
import HomeImageAccueil from '../../assets/imageaccueil1.png';
import Card from "../../components/Card";
const HomeWrapper =styled.div `
  display: flex;
  justify-content: center;
`
// <ImageTitle>Chez vous, partout et ailleurs</ImageTitle>
const HomerContainer = styled.div`
  margin: 30px;
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  //padding-left: 320px;
`
const ImageAccueil =styled.img `
 border-radius: 25px;
 width: 1240px;
 height: 223px;
 left: 100px;
 top: 171px;
 mix-blend-mode: darken;
 color: #000000;
 opacity: 1;
 background: #E5E5E5;
`
const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  border-radius: 10px;
`


var locations = require("../../data/logements.json");

function Home() {
  return (
   <HomeWrapper>
     <HomerContainer>
        <ImageAccueil src={HomeImageAccueil}/>
     </HomerContainer><br/>
     <CardsContainer>
        {locations.map((location, index) => (
          <Card
            key={`${location.id}-${index}`}
            title={location.title}
            cover={location.cover}
          />
        ))}
      </CardsContainer>
   </HomeWrapper>
  );
}

export default Home;
