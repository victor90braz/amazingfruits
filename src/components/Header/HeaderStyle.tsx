import styled from "styled-components";

const HeaderStyle = styled.header`
  background: #eb47479d;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
  padding: 10px;

  .container-left,
  .container-right {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .container-left {
    .search {
      box-sizing: border-box;
      display: flex;
      position: relative;
      width: 100%;

      .search_icon {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        height: 100%;
        top: 0;
        width: 24px;
        margin-left: 5px;
      }
      .search_input {
        background-color: #fff;
        border-radius: 12px;
        box-sizing: border-box;
        font-size: 16px;
        font-weight: 400;
        height: calc(20px + 28px);
        line-height: 20px;
        padding: 14px 16px 14px 40px;
      }
    }
  }

  .container-right {
    .telephone {
      display: flex;
      flex-direction: column;

      .telephone_number {
        font-weight: 600;
      }
    }
    .icon-search {
      .icon-search {
        background: white;
        box-shadow: 0 0 0 1px rgb(31 31 31 / 35%);
        border-radius: 96px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        padding: 12px 12px 12px 12px;
      }
    }
    .perfil {
      .box-button {
        background: rgb(31, 31, 31);
        border-radius: 96px;
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        line-height: 14px;
        padding: 10px;
        color: white !important;
        gap: 5px;

        .icon-user {
        }
        span {
          font-size: 16px;
          line-height: 24px;
          font-family: "Plus Jakarta Sans", sans-serif;
        }
      }
    }
  }
`;

export default HeaderStyle;
