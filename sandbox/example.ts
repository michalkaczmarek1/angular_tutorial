import * as fromCustomer from './customer';
// import { Observable, observable } from 'rxjs';
// // // // console.log("Hello world!");

// // // // let x: number = 3;
// // // // let y: string;
// // // // let z: boolean;
// // // // y = "adadads";

// // // // z = true;
// // // // z = false;

// // // // // console.log(x, y, z);

// // // let xs: number[]  = [1,2,3, 10];

// // // // // console.log(xs.length);

// // // // let ys: Array<number>;

// // // // xs[0] = 23;
// // // // xs[1] = "sdadads";

// // // let zs = [1,2,3, ...xs, 999];

// // // // console.log(zs);

// // // let i = `Liczba x = ${xs[3]+3}, ${zs[1]}`;

// // // console.log(i);

// // // // function welcome(name: string, age: number = 31): string{
// // // //     return `Welcome ${name}`;
// // // // }

// // // // function welcome(...names: string[]): string{
// // // //     return `Welcome ${names.join(", ")}`;
// // // // }

// // // interface Customer {
// // //     name: string;
// // //     age?: number;
// // //     address: Address;
// // // }

// // // interface Address {
// // //     street: string;
// // //     city: string;
// // // }

// // // function welcome(customer): string{
// // //     return customer.name + "\n" + customer.address.street + "\n" + customer.address.city;
// // // }
// // // // console.log(["michal", "Jan"].map((name: string) => {
// // // //     return `Welcome ${name}`;
// // // // }));


// // // console.log(welcome({
// // //     name: "Michal",
// // //     age:31,
// // //     address: {
// // //         street: "Sielawy 19a/32",
// // //         city: "Poznań"
// // //     }
// // // }));

// // let numbers = [1,2,3,5];

// // for(let n of numbers){
// //     console.log(n);
// // }

// // enum CustomerType {
// //     Standard = 11,
// //     Premium,
// //     VIP
// // }

// // function welcome(name: string, ct: CustomerType){
// //     if(ct === CustomerType.Premium){
// //         console.log(`Welcome, ${name}`);
// //     }
// // }

// // console.log(CustomerType[CustomerType.Premium]);

// // interface Customer {
// //     name: string;
// //     age: number;
// // }

// // let customer: Customer = {
// //     name: "Jan",
// //     age: 56
// // }

// interface CanTalk {
//     talk(): string;
// }

// class Person implements CanTalk {
    
//     constructor(protected name: string, public age: number){
    
//     }

//     welcome(){
//         return `Welcome, ${this.name}, ${this.age}`;
//     }

//     isAult(){
//         if(this.age >= 18){
//             return true;
//         } else {
//             return false;
//         }
//     }

//     talk(){
//         return 'Hello';
//     }

// }

// class Customer extends Person {

    

//     constructor(name: string, age: number, private advisor: string){
//         super(name, age);
//     }

//     welcome(){
//         return `Good morning ${this.name}`;
//     }

// }

// let customer2: Person = new Customer("Jan", 55, "Ewa");
// let customer = new Customer("Marek", 88, "Agata");
// // customer.name = "Jan";
// // customer.age = 76;
// customer.welcome();
// console.log(customer.isAult());
// console.log(new Customer("Jan", 16, "Agata").isAult());
// console.log(customer2.welcome());
// // customer2.name = "Wojciech";
// console.log(customer2.welcome());

// let imiona: string[] = ["Miłosz", "Ewa"];
// let imiona2: Array<string> = ["Miłosz", "Ewa"];

// imiona2[0] = 2;

// let x = imiona[2];



let customer1 = new fromCustomer.Customer("Jan", 22, "Ewa");
console.log(customer1);

// Observable.from(5);

console.log(fromCustomer.persons);

console.log(fromCustomer.welcome());