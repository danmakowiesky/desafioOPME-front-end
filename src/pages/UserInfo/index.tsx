import React, {useEffect, useState} from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import {FiChevronLeft} from 'react-icons/fi'
import api from '../../Services/api'
import {Header, Info, } from './style';

interface UserParams {
  username: string;
}

interface DataUser {
  id: string;
  login: string;
  avatar_url: string;
  name: string;
  blog: string;
  location: string;
}

const UserInfo: React.FC = () => {
  const [data, setData] = useState<DataUser | null>(null);
  const {params} = useRouteMatch<UserParams>();

   useEffect(() => {
     api.get(`/${params.username}/details`).then(response =>{
       const values = response.data;
       setData(values);
     });

   }, [params.username]);
  
  return (
    <>
      <Header>
        <h1>Infos</h1>
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <Info>
        <img src={data?.avatar_url} alt="nome" />
        <div>
          <strong>Usuário: {data?.login}</strong>
          <p>Id: {data?.id}</p>
          <p>Nome: {data?.name}</p>
          <p>Local: {data?.location}</p>
          <p>Site: {data?.blog}</p>
        </div>
      </Info>

    </>
  )
};

export default UserInfo;
