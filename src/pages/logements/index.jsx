import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Star from "./Stars";
import ImageProfile from "../../assets/profile.png";
import Collapse from "../Apropos/collapse";

const LogementWrapper = styled.div`
  display: grid;
  justify-content: center;
  flex-direction: column;
`;
const LogementContainer = styled.div`
  padding: 25px;
  padding: 60px 90px;
  display: grid;
  flex-direction: column;
  width: 1240px;
`;
const LogementTitleContainer = styled.div`
  margin: -40px;
  padding: 60px 90px;
  display: grid;
  flex-direction: column;
  width: 1240px;
  padding-left: right;
`;
const ContainerTitleAndProfile = styled.div`
  width: 1240px;
  display: flex;
  flex-direction: column;
  alig-items: right;
`;
const ImageContainerProfie = styled.img`
  margin: -25px;
  width: 64px;
  height: 64px;
  padding-left: 1237px;
`;
const SubOfBigTitle = styled.div`
  width: 93px;
  height: 52px;
  font-family: "Montserrat";
  font-style: normal;
  font-size: 18px;
  line-height: 142.6%;
  align-items: right;
  color: #ff6060;
`;
const BigTitle = styled.div`
  padding-left: 90px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 142.6%;
  /* or 51px */

  display: flex;
  align-items: flex-end;
  color: #ff6060;
  heigh: 64px;
`;
const SubTitle = styled.div`
  padding-left: 90px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 142.6%;
  /* identical to box height, or 26px */

  display: flex;
  align-items: flex-end;

  color: #ff6060;
`;
const ButtonContainer = styled.div`
  margin: -50px;
  margin-left: 40px;
  padding: 60px 90px;
  display: flex;
  align-items: left;
  flex-direction: row;
`;

const Buttons = styled.button`
  margin: 5px;
  width: 115px;
  height: 25px;
  background: #ff6060;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 142.6%;
  /* identical to box height, or 20px */
  border: none;
  text-align: center;
  border-radius: 10px;

  color: #ffffff;
`;
const StarContainer = styled.div`
  margin: 5px;
  display: flex;
  align-items: right;
  flex-direction: row;
  padding-left: 700px;
`;
const ContainerCollapses = styled.div`
  display: flex;
  flex-direction: row;
  width: 1000px;
  align-items: center;
  padding-left: 140px;
  align-content: space-between;
`;

function Accommodation() {
  const slides = [
    {
      url: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-1.jpg",
      title: "Beach",
    },
    {
      url: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-2.jpg",
      title: "Boat",
    },
    {
      url: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-3.jpg",
      title: "Forest",
    },
    {
      url: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-4.jpg",
      title: "City",
    },
  ];
  const containerStyles = {
    width: "1240px",
    height: "415px",
    margin: "0 auto",
    borderRadius: "25px",
  };

  return (
    <LogementWrapper>
      <LogementContainer>
        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
      </LogementContainer>
      <LogementTitleContainer>
        <ContainerTitleAndProfile>
          <BigTitle>Cozy loft on the Canal Saint-Martin</BigTitle>
          <ImageContainerProfie src={ImageProfile} />
        </ContainerTitleAndProfile>
        <SubTitle>Paris, Île-de-France</SubTitle>
      </LogementTitleContainer>
      <ButtonContainer>
        <Buttons>Copy</Buttons>
        <Buttons>Canal</Buttons>
        <Buttons>Paris 10</Buttons>
        <StarContainer>
          <Star />
        </StarContainer>
      </ButtonContainer>
      <ContainerCollapses>
        <Collapse label="Description">
          <p>
            Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer
            l'été et à côté de nombreux bars et restaurants. Au cœur de Paris
            avec 5 lignes de métro et de nombreux bus. Logement parfait pour les
            voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station
            de la gare de l'est (7 minutes à pied).
          </p>
        </Collapse>
         <hr/>
        <Collapse label="Équipements">
          Climatisation Wi-Fi 
          Cuisine 
          Espace de travail 
          Fer à repasser
          Sèche-cheveux Cintres
        </Collapse>
      </ContainerCollapses>
    </LogementWrapper>
  );
}
export default Accommodation;
