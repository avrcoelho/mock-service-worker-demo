import { Either } from '@/shared/Either';
import ITodoModel from '../models/ITodo.model';

export interface IGetTodoListUsecase {
  execute: () => Promise<Either<never, ITodoModel[]>>;
}
