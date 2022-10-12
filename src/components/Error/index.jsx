import styled from "styled-components";
import colors from "../../utils/style/colors";
import ImageError from "../../assets/error.png";
const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  align-items: center;
  padding: 100px;
`;

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: #ff6060;
  padding: 100px;
`;

const Illustration = styled.img`
  height: 263px;
  width: 597px;
  left: 0px;
  top: 0px;
  border-radius: nullpx;
`;
const LinkReturn = styled.div`
position: absolute;
left: 40.14%;
right: 40.14%;
top: 81.93%;
bottom: 15.53%;

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 142.6%;
/* identical to box height, or 26px */

display: flex;
align-items: flex-end;
text-decoration-line: underline;

color: #FF6060;
`;
function Error() {
  return (
    <ErrorWrapper>
      <Illustration src={ImageError} />
      <ErrorSubtitle>
        Oups! La page que vous demandez n'existe pas.
      </ErrorSubtitle>
      <LinkReturn>
         Retourner sur la page d'accueil
      </LinkReturn>
    </ErrorWrapper>
  );
}
export default Error;
