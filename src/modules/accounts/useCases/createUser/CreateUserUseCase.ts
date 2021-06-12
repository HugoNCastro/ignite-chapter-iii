/* eslint-disable no-useless-constructor */
/* eslint-disable camelcase */
import { inject, injectable } from 'tsyringe';
import ICreateUserDTO from '../../DTOs/ICreateUserDTO';
import IUsersRepository from '../../repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      name,
      email,
      password,
      driver_license,
    });
  }
}
export default CreateUserUseCase;
