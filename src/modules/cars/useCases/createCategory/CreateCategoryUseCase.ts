import { inject, injectable } from 'tsyringe';
import { ICategoryRepository } from '../../repositories/ICategoryRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoryRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name,
    );

    if (categoryAlreadyExists) {
      throw new Error('Category Already Exists!!');
    }
    this.categoriesRepository.create({ name, description });
  }
}

// eslint-disable-next-line import/prefer-default-export
export { CreateCategoryUseCase };
