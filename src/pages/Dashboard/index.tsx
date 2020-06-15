import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Title, Form, Repositories } from './style';
import api from '../../Services/api';

interface User {
  id: string;
  login: string;
  avatar_url: string;
  name: string;
}

const Dashboard: React.FC = () => {
  const [id, setId] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  async function searchUsers(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const response = await api.get(`api/users/?since=${id}`);

    const users = response.data;

    const mapUser = users.map((dev: any) => {
      return dev;
    });
    setUsers(mapUser);
  }
  return (
    <>
      <Title>Repositorios GitHub</Title>

      <Form onSubmit={searchUsers}>
        <input
          value={id}
          onChange={(e): void => setId(e.target.value)}
          placeholder="digite aqui"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {users.map(u => (
          <Link key={u.id} to={`/userinfo/${u.login}`}>
            <img src={u.avatar_url} alt={u.name} />
            <div>
              <strong>{u.name}</strong>
              <p>{u.login}</p>
            </div>
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
