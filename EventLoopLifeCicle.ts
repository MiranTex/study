const calc = require('./moduleCommon.js');

import { sub } from "./ModuleTypes/ESModule";

console.log(calc.add(1, 2));
console.log(sub(2, 1));

 
queueMicrotask(() => {
    console.log('Executado como uma microtask');
  });

console.log('First sync command');

setImmediate(() => {
    console.log('Executado imediatamente após I/O events');
  });

 
setTimeout(() => {
    console.log('macrotask 1');
  }, 0);
  

Promise.resolve().then(() => {
  console.log("Microtask 1");
});


console.log('Second sync command');




process.nextTick(() => {
    console.log('Executado na próxima iteração do event loop');
  });
