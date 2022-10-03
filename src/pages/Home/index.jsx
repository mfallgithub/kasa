import styled from "styled-components";
import HomeImageAccueil from '../../assets/imageaccueil.png'
const HomeWrapper =styled.div `
  display: flex;
  justify-content: center;
`
const HomerContainer = styled.div`
  margin: 30px;
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
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
const ImageTitle = styled.h2`
font-family: 'Montserrat';
line-height: 142.6%;
position: absolute;
font-style: normal;
font-weight: 500;
font-size: 48px;
display: flex;
align-items: flex-end;
color: #FFFFFF;
justify-content: center;
`
function Home() {
  return (
   <HomeWrapper>
     <HomerContainer>
        <ImageAccueil src={HomeImageAccueil}/>
        <ImageTitle>Chez vous, partout et ailleurs</ImageTitle>
     </HomerContainer>
   </HomeWrapper>
  );
}

export default Home;
