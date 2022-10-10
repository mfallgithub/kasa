import { useState, useRef } from "react";
import styled from "styled-components";

const ContentParent = styled.div`
  height: 0px;
  overflow: hidden;
  transition: height ease 0.9s;
`;

const Content = styled.div`
  padding: 0.5rem;
  border-radius: 5px;
`;

const ButtonStyled = styled.button`
  width: 1023px;
  background: #ff6060;
  height: 47px;
  border-radius: 5px;
  bottom: 74.46%;
  color: white;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 142.6%;
  /* or 34px */

  display: flex;
  align-items: center;

  color: #ffffff;
`;
const Collapsible = (props) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const contentRef = useRef();
  return (
    <div>
      <ButtonStyled onClick={toggle}>{props.label}</ButtonStyled>
      <ContentParent
        ref={contentRef}
        style={
          open
            ? { height: contentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <Content>{props.children}</Content>
      </ContentParent>
    </div>
  );
};

export default Collapsible;
