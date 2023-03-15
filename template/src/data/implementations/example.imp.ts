import {ExampleRepository} from "../../domain/repositories/example.repository";
import {ExampleModel} from "../../domain/models/example.model";

export function exampleImp(): ExampleRepository{
    return  {
        getExample(): Promise<ExampleModel> {
            return new Promise<ExampleModel>((resolve, reject)=>{
                try {
                    resolve(
                        {
                            response:{
                                example:{
                                    name: 'Example'
                                }
                            }
                        }
                    )
                }catch (e) {
                    reject(e)
                }
            })
        }

    }
}
