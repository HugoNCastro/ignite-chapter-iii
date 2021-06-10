import { inject, injectable } from 'tsyringe';
import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @inject('SpecificationsRepository')
    private specificationRepository: ISpecificationRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationRepository.findByName(name);
    if (specificationAlreadyExists) {
      throw new Error('Specification already exists');
    }
    await this.specificationRepository.create({
      name,
      description,
    });
  }
}

// eslint-disable-next-line import/prefer-default-export
export { CreateSpecificationUseCase };
