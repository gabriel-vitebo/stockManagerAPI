import { Entity } from '../../core/entities/entity'
import { Optional } from '../../core/types/optional'
import { UniqueEntityId } from '../../core/entities/unique-entity-id'

interface UserProps {
  name: string
  email: string
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

  set name(name: string) {
    this.props.name = name
    this.updateDate()
  }

  userWithSameEmail(email: string) {
    email === this.email && null
  }

  static create(props: Optional<UserProps, 'createdAt'>, id?: UniqueEntityId) {
    const user = new User(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )

    return user
  }
}
