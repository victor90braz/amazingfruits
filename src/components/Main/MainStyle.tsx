import styled from "styled-components";

const MainStyle = styled.div`
  display: flex;
  width: 100%;

  .container-left {
    flex: 1.5;
    display: flex;
    flex-direction: column;

    .container-bookings {
      display: flex;
      flex-direction: row;
      padding: 10px;

      .box-image {
        padding: 10px;
        img {
          width: 100%;
          object-fit: cover;
          border-radius: 5px;
        }
      }
    }
    .container-bookings:hover {
      border: 1px solid green;
      cursor: pointer;
    }

    .box-data {
      display: flex;
      flex-direction: column;
      justify-content: right;

      h1 {
        margin: 0;
        font-size: 1.5rem;
      }

      span {
        font-weight: 500;
        color: green;
      }

      p {
        font-size: 0.8em;
      }

      button {
        -webkit-box-align: center;
        align-items: center;
        background: rgb(0, 167, 121);
        box-shadow: none;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 500;
        line-height: 14px;
        outline: none;
        padding: 12px;
        visibility: visible;
        color: white !important;
        width: 150px;
        font-weight: bold;
      }
    }
  }

  .container-right {
    flex: 2;
    border: 1px solid red;

    .map-responsive {
      overflow: hidden;

      padding-bottom: 56.25%;

      position: relative;

      height: 100%;
    }

    .map-responsive iframe {
      left: 0;

      top: 0;

      height: 100%;

      width: 100%;

      position: absolute;
    }
  }
`;

export default MainStyle;
