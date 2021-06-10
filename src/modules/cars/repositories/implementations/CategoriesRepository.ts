import { getRepository, Repository } from 'typeorm';
import { Category } from '../../entities/Category';
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from '../ICategoryRepository';

class CategoriesRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const categoryByName = await this.repository.findOne({ name });
    return categoryByName;
  }
}

// eslint-disable-next-line import/prefer-default-export
export { CategoriesRepository };
