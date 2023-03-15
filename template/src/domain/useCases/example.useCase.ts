import {ExampleRepository} from "../repositories/example.repository";

export function exampleUseCase(repository: ExampleRepository){
    return {
        getExampleData(){
            return repository.getExample();
        }
    }
}
