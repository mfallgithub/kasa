import { useState, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

const ContentParent = styled.div`
  height: 0px;
  overflow: hidden;
  transition: height ease 0.9s;
  background: white;
`;

const Content = styled.div`
  padding: 0.5rem;
  border-radius: 5px;
  width: 1000px;
  color: #ff6060;
`;

const ButtonStyled = styled.button`
  border: hidden;
  width: 1023px;
  background: #ff6060;
  height: 47px;
  border-radius: 5px;
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



const PanelHeading = styled.div`
  color: white;
  padding: 100px 20px;
  padding-left: 890px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const ToggleButtonWrapper = styled.div`
  transform: ${(props) =>
    props.isCollapsed ? "rotate(0deg)" : "rotate(180deg)"};
`;

const Collapsible = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const togglePanel = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const contentRef = useRef();
  return (
    <div>
      <ButtonStyled onClick={toggle}>
        {props.label}
          <PanelHeading>
            <ToggleButtonWrapper onClick={togglePanel} isCollapsed={isCollapsed}>
              <FontAwesomeIcon icon={faChevronCircleDown} />
            </ToggleButtonWrapper>
          </PanelHeading>
      </ButtonStyled>
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
