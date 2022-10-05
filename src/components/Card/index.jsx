/*import styled from "styled-components"
import colors from "../../utils/style/colors";

const CardWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 15px;
background-color: ${colors.backgroundLight};
border-radius: 30px;
width: 300px;
height: 300px;
transition: 200ms;
&:hover {
  cursor: pointer;
  box-shadow: 2px 2px 10px #e2e3e9;
`;
function Card(){
    return (
        <CardWrapper>
           
        </CardWrapper>
    )
}
export default Card*/
import propTypes from "prop-types";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const CardTitle = styled.span`
  color: #ffffff;
  font-size: 18px;
  font-weight: normal;
  align-self: right;
`;

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 10px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
`;

function Card({ title, cover }) {
  return (
    <CardWrapper>
      <CardImage src={cover} alt="location"/>
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  );
}
Card.propTypes = {
  title: propTypes.string.isRequired,
  cover: propTypes.string.isRequired,
};

Card.defaultProps = {
  title: "",
  cover: "",
};

export default Card;
