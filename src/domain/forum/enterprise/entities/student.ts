import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

interface StudentProps {
  name: string
  ra: string
  cpf: string
}

export class Student extends Entity<StudentProps> {
  static create(props: StudentProps, id?: UniqueEntityId) {
    const student = new Student(props, id)
    return student
  }

  get name(): string {
    return this.props.name
  }
}
