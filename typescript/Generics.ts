export function showValue <T>(value: T): T {

    console.log(value);

    return value;
}


export interface withName {
    name: string;
  }
  
export function imprimirNome<T extends withName>(obj: T) {
    console.log(obj.name);
}


export function combine <T,U>(obj1: T, obj2: U): T & U {
    return {...obj1, ...obj2};
}