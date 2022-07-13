import styled from "styled-components";

const NavigationStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: black;
  color: white;
  line-height: 85px;
  width: 100%;

  nav {
    margin-right: 20px;
    margin-left: 20px;
  }

  .main-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;

export default NavigationStyle;
