import { type ExampleModel } from '../models/example.model'

export interface ExampleRepository {
  getExample: () => Promise<ExampleModel>
}
