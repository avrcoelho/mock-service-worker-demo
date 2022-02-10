import { IGetTodoListUsecase } from '@/domain/usecases/IGetTodoList.usecase';
import ICacheModel from '@/infrastructure/cache/models/ICache.model';
import IHttpClientModel from '@/infrastructure/http/httpClient/models/IHttpClient.model';
import ITodoModel from '@/domain/models/ITodo.model';
import { Either, right } from '@/shared/Either';

class GetTodoListUsecase implements IGetTodoListUsecase {
  constructor(
    private readonly cache: ICacheModel,
    private readonly httpClient: IHttpClientModel,
  ) {}

  async execute(): Promise<Either<never, ITodoModel[]>> {
    const { data } = await this.httpClient.get<ITodoModel[]>({
      url: '/todo-list',
    });

    const parsedData = JSON.stringify(data);
    this.cache.save('todolist', parsedData);

    return right(data);
  }
}

export default GetTodoListUsecase;
