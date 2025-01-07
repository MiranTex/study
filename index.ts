// import './EventLoopLifeCicle';
import { MsiManufacturer } from "./DesignPattern/creational/AbstractMethodFactory";
import { IntensityCommand, LightPowerCommand, SmartHouseApp, SmartHouseLight } from "./DesignPattern/behavioural/Command";
import { Mediator, Seller } from "./DesignPattern/behavioural/Mediator";
import { CarBuilder, CarSchemaBuilder, Director } from "./DesignPattern/creational/Builder";
import { GreaterThan1, GreaterThan2, GreaterThan3, ShouldBeGreaterThanThree } from "./DesignPattern/behavioural/ChainOfResponsability";
import { BeefBurgerRestaurant } from "./DesignPattern/creational/FactoryMethod";
import {Car, Bus, Gps} from "./DesignPattern/creational/Prototype";
import { ImageEditor, ImageEditorBackup } from "./DesignPattern/behavioural/Memento";
import { combine, imprimirNome, showValue } from "./typescript/Generics";

import { typeOfUser } from "./typescript/TypeMapping";
import { EmailMsgListener, MobileAppListener, Store } from "./DesignPattern/behavioural/Observer";
import { startServers } from "./FTP/FTPServer";
import { discoverFtpServer } from "./FTP/FTPClient";


/***************** Design patterns ***********************************************************/

//factory method pattern
// {

//   let restaurant = new BeefBurgerRestaurant();
//   const burger = restaurant.orderBurger();
//   burger?.prepare();
// }

//abstract factory pattern
// {
//   const company = new MsiManufacturer();
//   const gpu = company.createGpu();
//   gpu?.assemble();
  
//   const monitor = company.createMonitor();
//   monitor?.assemble();
// }
 
//builder pattern
// {

  
//   const carBuilder = new CarBuilder();
//   const carSchemaBuilder = new CarSchemaBuilder();
//   const carDirector = new Director(new CarBuilder());
  
//   carDirector.constructEconomicCar(carBuilder);
//   const economicCar = carBuilder.build();
//   economicCar.resume();
  
//   carDirector.constructSportCar(carBuilder);
//   const sportCar = carBuilder.build();
//   sportCar.resume();
  
//   carDirector.constructEconomicCar(carSchemaBuilder);
//   const economicCarSchema = carSchemaBuilder.build();
//   economicCarSchema.craft();
  
// }

//prototype pattern
// {
//   const car = new Car('Toyota', 'Corolla', 'White', 200, new Gps('Garmin', 'Nuvi 200'));
//   const clonedCar = car.clone();
//   car.setTopSpeed(250);

//   if (car.gps) {
//     car.gps.model = 'Nuvi 300';
//   }

//   const bus = new Bus('Toyota', 'Coaster', 'White', 30);
//   const clonedBus = bus.clone();

//   console.log(car);
//   console.log(clonedCar);
//   console.log(bus);
//   console.log(clonedBus);
// }

//chain of responsability pattern
{
//   const handler = new GreaterThan1();

//   handler
//   .setNextHandler(new GreaterThan2())
//   .setNextHandler(new GreaterThan3());

//   const shouldBeGreaterThanThree = new ShouldBeGreaterThanThree(handler);

//   console.log(shouldBeGreaterThanThree.handleRequest(5));
}

//command pattern
// {
//     //receiver
//     const livingRoomLight = new SmartHouseLight('Living Room');
    
//     //commands
//     const turnLightCommand = new LightPowerCommand(livingRoomLight);
//     const turnIntensityCommand = new IntensityCommand(livingRoomLight);

//     //invoker
//     const app = new SmartHouseApp();	

//     app.addCommand('turnOnTheLight',turnLightCommand);
//     app.addCommand('increaseLightIntensity',turnIntensityCommand);

//     app.executeCommand('turnOnTheLight');

//     for (let i = 0; i < 50; i++) {
//         app.executeCommand('increaseLightIntensity');
//     }
//     app.undoCommand('turnOnTheLight');

//     for (let i = 0; i < 101; i++) {
//         app.undoCommand('increaseLightIntensity');
//     }
// }

//mediator pattern
// {
//     const mediator = new Mediator();
//     const seller1 = new Seller();
//     const seller2 = new Seller();

//     seller1.addProduct({id: '1', name: 'Product 1', price: 100});
//     seller1.addProduct({id: '2', name: 'Product 2', price: 200});

//     seller2.addProduct({id: '3', name: 'Product 3', price: 300});
//     seller2.addProduct({id: '4', name: 'Product 4', price: 400});

//     mediator.addSeller(seller1, seller2);

//     // mediator.showProducts();

//     // mediator.buyProduct('1');

//     seller2.buyProduct('3');
// }

//memento pattern
// {
//     const editor = new ImageEditor('image.ext', 'ext');
//     const memento = editor.save();

//     console.log('without backup manager');
    
//     editor.convertToFormat('png');
//     console.log(editor);

//     editor.restore(memento);
//     console.log(editor);

    
//     console.log('with backup manager');

//     const backupManager = new ImageEditorBackup(editor);
//     backupManager.backup();
//     console.log(editor);

//     editor.convertToFormat('gif');
//     backupManager.backup();
//     console.log(editor);

//     editor.convertToFormat('bmp');
//     backupManager.backup();
//     console.log(editor);


//     backupManager.undo();
//     backupManager.undo();
//     backupManager.undo();


//     console.log(editor);


// }

//Observer
// {

//     const store = new Store();

//     store.getService().subscribe(new EmailMsgListener('ariel.teixeira@javra.com'));
//     store.getService().subscribe(new EmailMsgListener('arielmirantex@gmail.com'));
//     store.getService().subscribe(new MobileAppListener('999999999'));

//     store.getService().notify();

// }


/***************** typescript study ******************************************************************/

//Generics
// {
//     class User {
//         constructor(public name: string, public age: number) {}
//     }

//     const user = new User('John', 30);

//     showValue(user);

//     imprimirNome(user);
//     // imprimirNome({FirstName: 'John', lastName: 'Doe'});

//     console.log(combine({name: 'John'}, {age: 30}));
// }

//Type mapping
// {

//     let user: typeOfUser;
//     user = {name: 'John', age: 30};

//     user.age = 50;
//     user.name = 'Doe';

//     console.log(user);
// }

//get user enetery

const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Função para ler entradas
rl.question('server (1) or client (2) ', (option:string) => {

    if(option == '1'){
        console.log('Starting servers...');
        
        startServers();
    }
    else if(option == '2'){
        console.log('Discovering FTP server...');
        discoverFtpServer();
    }
    
});





