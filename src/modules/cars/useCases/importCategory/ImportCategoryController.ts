import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
  // eslint-disable-next-line class-methods-use-this
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    await importCategoryUseCase.execute(file);

    return response.status(201).send();
  }
}

// eslint-disable-next-line import/prefer-default-export
export { ImportCategoryController };
