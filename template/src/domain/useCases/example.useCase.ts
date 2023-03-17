import { type ExampleRepository } from '../repositories/example.repository'

export function exampleUseCase (repository: ExampleRepository): ExampleRepository {
  return {
    async getExample () {
      return await repository.getExample()
    }
  }
}
