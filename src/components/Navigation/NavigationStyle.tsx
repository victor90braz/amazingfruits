import styled from "styled-components";

const NavigationStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: black;
  color: white;
  line-height: 85px;

  .main-nav_left-side,
  .main-nav_right-side {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default NavigationStyle;
