import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  // eslint-disable-next-line no-useless-constructor

  // eslint-disable-next-line class-methods-use-this
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    await createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

// eslint-disable-next-line import/prefer-default-export
export { CreateCategoryController };
