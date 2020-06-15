import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;
  }
`;

export const Info = styled.div`
  margin-top: 80px;
  max-width: 700px;
  display: flex;
  justify-content: center;

  img {
    display: flex;
    align-items: center;
    width: 200px;
    height: 200px;
    border-radius: 100%;
  }

  div {
    margin-left: 15px;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }
`;
