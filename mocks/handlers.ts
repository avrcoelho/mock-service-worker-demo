import { rest } from 'msw';

import ITodoModel from '../src/domain/models/ITodo.model';

const todoList: ITodoModel[] = [];

export const handlers = [
  rest.get(`http://localhost:3333/todo-list`, (req, res, ctx) => {
    return res(ctx.json(todoList), ctx.status(200));
  }),
];
