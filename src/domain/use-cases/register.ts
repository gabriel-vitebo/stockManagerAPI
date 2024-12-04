import { hash } from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { PrismaUsersRepository } from '@/domain/repositories/prisma-users-repository'

interface RegisterUseCaseRequest {
  name: string
  email: string
  password: string
}

export async function registerUseCase({
  name,
  email,
  password,
}: RegisterUseCaseRequest) {
  const passwordHash = await hash(password, 10)

  const userWithSameEmail = await prisma.user.findUnique({
    where: { email },
  })

  if (userWithSameEmail) {
    throw new Error('email already exists')
  }

  const prismaUserRepository = new PrismaUsersRepository()

  await prismaUserRepository.create({
    name,
    email,
    password_hash: passwordHash,
  })
}
