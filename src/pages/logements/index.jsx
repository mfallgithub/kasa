import styled from "styled-components";
import ImageSlider from "./ImageSlider";
const LogementWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-row: 1fr;
`;
const LogementContainer=styled.div`
margin: 30px;
padding: 60px 90px;
display: grid;
flex-direction: row;
width: 1240px;
` ;

const Title = styled.div`
 padding-left: 80px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 142.6%;
/* or 51px */

display: flex;
align-items: flex-end;
color: #FF6060;
margin-bottom: 100px;
`;
const SubTitle = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 142.6%;
/* identical to box height, or 26px */

display: flex;
align-items: flex-end;

color: #FF6060;
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
        <Title>
        Cozy loft on the Canal Saint-Martin
      </Title>
      
      </div>
      <SubTitle>
      Paris, Île-de-France
      </SubTitle>
      
    </LogementContainer>
    </LogementWrapper>
  );
}
export default Accommodation;
