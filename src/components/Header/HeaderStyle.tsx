import styled from "styled-components";

const HeaderStyle = styled.header`
  background: #eb47479d;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  .container-left,
  .container-right {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .search {
    display: flex;
    background: white;
    padding: 10px;
    border-radius: 12px;

    .search_icon {
      margin: auto;
    }
    .search_input {
      border: none;
    }
  }
`;

export default HeaderStyle;
