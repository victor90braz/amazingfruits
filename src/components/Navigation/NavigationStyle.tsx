import styled from "styled-components";

const NavigationStyle = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  .element-left,
  .element-right {
    display: flex;
  }
`;

export default NavigationStyle;
