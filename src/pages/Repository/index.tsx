import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import api from '../../Services/api';
import { Header, Repositories } from './style';

interface RepositoryParams {
  username: string;
}

interface Repos {
  id: string;
  full_name: string;
  description: string;
  stargazers_count: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repositorie, setRepositorie] = useState<Repos[]>([]);

  useEffect(() => {
    api.get(`api/users/${params.username}/repos`).then(response => {
      const repos = response.data;
      const mapRepo = repos.map((repo: any) => {
        return repo;
      });
      console.log(mapRepo);
      setRepositorie(mapRepo);
    });
  }, []);

  return (
    <>
      <Header>
        <h1>Repositorios</h1>
        <Link to={`/userinfo/${params.username}`}>
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <Repositories>
        {repositorie.map(r => (
          <a
            key={r.id}
            target="_blank"
            href={`https://github.com/${r.full_name}`}
          >
            <div>
              <strong>{r.full_name}</strong>
              <p>{r.description}</p>
            </div>
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Repository;
