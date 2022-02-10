import { useEffect } from 'react';

import { getTodoListUsecase } from '../../../usecases';
import { Container } from './styles';

const Home = () => {
  useEffect(() => {
    getTodoListUsecase
      .execute()
      .then(response => {
        console.log(response.value);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <h1>Hello, Dev :)</h1>
    </Container>
  );
};

export default Home;
