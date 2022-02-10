import { rest } from 'msw';
import { setupServer } from 'msw/node';

import Localstorage from '@/infrastructure/cache/inMemory/LocalStorage';
import AxiosHttpClient from '@/infrastructure/http/httpClient/implementation/Axios';
import GetTodoListUsecase from '../GetTodoList.usecase';

let getTodoListUsecase: GetTodoListUsecase;
let localstorage: Localstorage;
let httpClient: AxiosHttpClient;
const { API_URL } = process.env;

const data = [
  {
    id: '123',
    title: 'Get project',
  },
];
const server = setupServer(
  rest.get(`${API_URL}/todo-list`, (req, res, ctx) => {
    return res(ctx.json(data));
  }),
);

describe('GetTodoList usecase', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  beforeEach(() => {
    localstorage = new Localstorage();
    httpClient = new AxiosHttpClient();
    getTodoListUsecase = new GetTodoListUsecase(localstorage, httpClient);
  });

  it('should be able to get', async () => {
    const response = await getTodoListUsecase.execute();

    expect(response.value).toEqual(data);
  });
});
