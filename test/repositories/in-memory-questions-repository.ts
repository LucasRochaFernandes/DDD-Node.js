import { QuestionsRepository } from '@/domain/forum/application/respositories/questions-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'

export class InMemoryQuestionsRespository implements QuestionsRepository {
  public items: Question[] = []
  async create(question: Question): Promise<void> {
    this.items.push(question)
  }
}