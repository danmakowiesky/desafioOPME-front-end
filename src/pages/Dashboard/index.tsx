import React from 'react';
import {FiChevronRight} from 'react-icons/fi';
import { Title, Form, Repositories } from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <Title>Repositorios GitHub</Title>

      <Form action="">
        <input placeholder="digite aqui" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars2.githubusercontent.com/u/54086257?s=460&v=4" alt="Daniel"/>
          <div>
            <strong>DanMakowiesky/blog</strong>
            <p>teste do blog</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://avatars2.githubusercontent.com/u/54086257?s=460&v=4" alt="Daniel"/>
          <div>
            <strong>DanMakowiesky/blog</strong>
            <p>teste do blog</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://avatars2.githubusercontent.com/u/54086257?s=460&v=4" alt="Daniel"/>
          <div>
            <strong>DanMakowiesky/blog</strong>
            <p>teste do blog</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
