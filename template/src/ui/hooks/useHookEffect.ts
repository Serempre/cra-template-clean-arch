import {useEffect} from "react";

interface AsyncFunction{
    asyncFunction: <T>() => Promise<T>
    successFunction: <T>(arg0?: T) => void
    errorFunction: <T>(e?: T) => void
    returnFunction?: ()=> void
    dependencies: Array<any>
}


export function useAsyncEffect({asyncFunction,successFunction,errorFunction,dependencies = [],returnFunction}:AsyncFunction){
    useEffect(()=>{
        let isActive = true;
        asyncFunction().then(result =>{
            if(isActive){
                successFunction(result)
            }
        }).catch(e =>{
            errorFunction(e)
        })

        return ()=>{
            if(returnFunction){
                returnFunction()
            }
            isActive = false
        }
    },dependencies)

}

export function useCustomEffect(effect:()=>void,dependencies:Array<any>,returnFunction?:()=> void){
    useEffect(()=>{
        let isActive = true;
        if(isActive){
            effect();
        }

        return ()=> {
            if(returnFunction){
                returnFunction()
            }
            isActive = false;
        }
    },dependencies)
}
