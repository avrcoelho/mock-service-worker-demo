import httpClient from '@/infrastructure/http/httpClient';
import cache from '@/infrastructure/cache';
import GetTodoListUsecase from './GetTodoList.usecase';

const getTodoListUsecase = new GetTodoListUsecase(cache, httpClient);

export { getTodoListUsecase };
