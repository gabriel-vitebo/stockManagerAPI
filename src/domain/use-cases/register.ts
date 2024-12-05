import { hash } from 'bcryptjs'
import { UsersRepository } from '@/domain/repositories/users-repository'
import { User } from '../entities/User'

interface RegisterUseCaseRequest {
  name: string
  email: string
  password: string
}

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ name, email, password }: RegisterUseCaseRequest) {
    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new Error('email already exists')
    }

    const passwordHash = await hash(password, 10)

    const user = User.create({
      name,
      email,
      password: passwordHash,
    })

    await this.usersRepository.create({
      name: user.name,
      email: user.email,
      password_hash: passwordHash,
    })
  }
}
