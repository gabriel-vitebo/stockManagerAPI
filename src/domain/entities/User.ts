import { Entity } from '../../core/entities/entity'
import { Optional } from '../../core/types/optional'
import { UniqueEntityId } from '../../core/entities/unique-entity-id'

interface UserProps {
  name: string
  createdAt: Date
  updatedAt?: Date
}

export class User extends Entity<UserProps> {
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
