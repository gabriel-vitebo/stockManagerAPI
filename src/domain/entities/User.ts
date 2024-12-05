import { Entity } from '../../core/entities/entity'
import { Optional } from '../../core/types/optional'
import { UniqueEntityId } from '../../core/entities/unique-entity-id'
import { hash } from 'bcryptjs'

interface UserProps {
  name: string
  email: string
  password: string
  createdAt: Date
  updatedAt?: Date
}

export class User extends Entity<UserProps> {
  private updateDate() {
    this.props.updatedAt = new Date()
  }

  get name() {
    return this.props.name
  }

  get email() {
    return this.props.email
  }

  get password() {
    return this.props.password
  }

  set name(name: string) {
    this.props.name = name
    this.updateDate()
  }

  set password(password: string) {
    this.props.password = password
    this.updateDate()
  }

  userWithSameEmail(email: string) {
    email === this.email && null
  }

  async passwordHash(password: string) {
    return await hash(password, 10)
  }

  static async create(props: Optional<UserProps, 'createdAt'>, id?: UniqueEntityId) {
    const hashedPassword = await passwordHash(props.password)
    const user = new User(
      {
        ...props,
        createdAt: new Date(),
        password: hashedPassword,
      },
      id,
    )

    return user
  }
}
