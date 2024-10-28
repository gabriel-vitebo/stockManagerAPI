import { randomUUID } from 'node:crypto'

export class User {
  id: string
  name: string

  constructor(name: string, id?: string) {
    this.id = id ?? randomUUID()
    this.name = name
  }
}
