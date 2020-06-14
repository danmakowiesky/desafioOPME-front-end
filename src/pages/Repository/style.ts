import styled  from 'styled-components';

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

export const Repositories = styled.section`
  margin-top: 80px;
  
  a{
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 10px;
    }
  
    &:hover{
      transform: translateX(10px)
    }


    div{
      margin-left: 15px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      
      p{
        font-size:18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
     
    }
  }
  
`;


