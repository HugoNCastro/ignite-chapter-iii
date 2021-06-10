import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  // eslint-disable-next-line class-methods-use-this
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createSpecificationUseCase = container.resolve(
      CreateSpecificationUseCase,
    );

    await createSpecificationUseCase.execute({ name, description });
    return response.status(201).send();
  }
}

// eslint-disable-next-line import/prefer-default-export
export { CreateSpecificationController };
