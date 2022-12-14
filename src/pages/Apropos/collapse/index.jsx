import React from "react";
import styled from "styled-components";
import useMeasure from "react-use-measure";
import { useSpring, animated } from "react-spring";
import faChevronCircleDownImage from "../../../assets/iconcollapse.png";


const ContentParent = styled.div`
  width: 1023px;
  background: #ff6060;
  border-radius: 5px;
  font-weight: 500;
  font-size: 24px;
  line-height: 142.6%;
`;

const ContentHeading = styled.div`
  background-color: #ff6060;
  color: #ffffff;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 5px;
`;
//le contenu du collapse
const Content = styled(animated.div)`
  border: none;
  border-top: none;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  color: #ff6060;
  background: #f7f7f7;
  overflow: hidden;
  font-weight: 400;
  font-size: 24px;
`;

const ContentInner = styled.div`
  padding: 20px 0;
`;
const ImageIcon=styled.img`

`;

const Collapse = (props) => {
  const [open, setOpen] = React.useState(true);

  const [ref, bounds] = useMeasure();

  const toggleWrapperAnimatedStyle = useSpring({
    transform: open ? "rotate(0deg)" : "rotate(180deg)",
  });
  const ContentAnimatedStyle = useSpring({
    height: open ? 0 : bounds.height,
  });

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <ContentParent>
      <ContentHeading onClick={toggle}>
        {props.label}
        <animated.div style={toggleWrapperAnimatedStyle}>
          <ImageIcon src={faChevronCircleDownImage} alt="image of icon" />
        </animated.div>
      </ContentHeading>
      <Content style={ContentAnimatedStyle}>
        <ContentInner ref={ref}>{props.children}</ContentInner>
      </Content>
    </ContentParent>
  );
};

export default Collapse;
