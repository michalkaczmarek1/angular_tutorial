import { Log, LogClass } from './decorators';

@LogClass("info")
export class Person {
    
    constructor(protected name: string, public age: number){
        setTimeout(function(){
            console.log(this.name)
        }, 500);
    }

    @Log()
    welcome(){
        return `Welcome, ${this.name}, ${this.age}`;
    }

    isAult(){
        if(this.age >= 18){
            return true;
        } else {
            return false;
        }
    }

    talk(){
        return 'Hello';
    }

}

export class Customer extends Person {

    

    constructor(name: string, age: number, private advisor: string){
        super(name, age);
    }

    welcome(){
        return `Good morning ${this.name}`;
    }

}

export let persons = ["Michał", "Jan", "Maria"];

export function welcome(){
    return "Witaj";
}