// 'use strict'


// console.log('hello akshay wel-come to reading oops');


// how to create a class in java script:-

// const person=function(firstname,lastname){
//     // its calld instance property
//     this.firstname=firstname
//     this.lastname=lastname

    // never to this
    // this.calcagr=function(){
    //     console.log(2037-lastname);g
    // }
    // console.log(this);
// }

// new keyword creat a empty objects
// function called this {} empty object
// empty link a prototype
// function automaticlly  return 

// const a= new person('akshay',1998)
// const b= new person('akshay1',2000)
// const c= new person('akshay2',2000)
// const d= new person('akshay3',2000)

// we can use instanceof property to check object available or not true false value
// console.log(a instanceof person);

// working with prototype
// console.log(person.prototype);
// person.prototype.calc=function(){
//     console.log(2037-this.lastname);
// }


// a.calc()
// b.calc()
// c.calc()
// d.calc()

// person.prototype.getname = function(){
//     // console.log('akshay');
//     return this.firstname
// }
// a.getname('akshaypandey')



// console.log(a.__proto__);
// console.log(a.__proto__===person.prototype);
// console.log(person.prototype.isPrototypeOf(person));

// person.prototype.spicies='home spicies'
// console.log(a.spicies,b.spicies );
// console.log(a.hasOwnProperty('firstname'));
// console.log(a.hasOwnProperty('spicies'));



// const highspeed = document.querySelector('.highspeed').addEventListener('click',acculrator)
// const lowspeed = document.querySelector('.lowspeed').addEventListener('click',breck)
// const output=document.querySelector('.output')












// coding chellange in oops


// const output=document.querySelector('.output')


// const car = function(carname,speed){
//     this.carname=carname;
//     this.speed=speed
// }

// // create a acculrator function in 

// car.prototype.acculrator = function(){
//     this.speed+=10
//     console.log(`check car name is ${this.carname} and speed is ${this.speed}`);
// }

// car.prototype.breck = function(){
//     this.speed-=50
//     console.log(`check car name is ${this.carname} and speed is ${this.speed}`);

// }

// // const highspeed = document.querySelector('.highspeed').addEventListener('click',acculrator)
// // const lowspeed = document.querySelector('.lowspeed').addEventListener('click',breck)

// const car1 =new car('bmw',120)
// const car2 =new car('marcidies',115)
// const car3 =new car('verna',100)

// console.log(car3);
// car3.acculrator()
// car3.acculrator()
// car3.breck()
// car3.acculrator()



// ////////////////////////////////////////////////////////////////////////////////


//  Es6 classes 


// class akshay{
//     constructor(firstname,lastname){
//         this.firstname=firstname
//         this.lastname=lastname
//     }
//     chang(){
//        return this.lastname + "ji"
//     }
// }

// const check = new akshay('akshay','pandey')
// console.log(check);
// console.log(check.chang());



// geter and seter 


// const obj = {
//     my_name : 'akshay',
//     arr : [12,50,80,100],
//     //  get find a value in array createing a function
//     get findnum(){
//         return this.arr.slice(-1).pop();
//     },
//     // set the value inside the objects
//     set findnum(mov){
//         return this.arr.push(mov)
//     }
// }
// obj.findnum=10    // can use = then change the set value
// console.log(obj.findnum);

// console.log(obj.arr);


// class person {
//     constructor(fullname,birthyear){
//         this.fullname=fullname
//         this.birthyear=birthyear
//     }
//     calage (){
//         console.log(this.birthyear+22);
//         return this.birthyear+22
//     }
//     get age (){
//         console.log(this.birthyear-22);
//         // return this.birthyear+22
//     }
//     set fullname(name){
//         // console.log(name);
//         // if(name.includes(' '))this._fullname=name;
//         // else{
//         //     alert('name is not full name')
//         // }
//     }
//     get fullname(){
//         return this._fullname
//     }
    
//     static hey() {
//         console.log('hey akshay',this);
//     }
// }

// person.hey = function(){
//     // console.log('hey i am akshay');
// }
// person.hey()




// const name1 =new person('akshay pandey',1998)
// const nofullname = new person('dewa',1997)
// console.log(nofullname);
// console.log(name1);
// name1.calage()
// name1.age





//  coding challange :-2


// class checkspeed{
//     constructor(car,speed){
//         this.car=car
//         this.speed=speed
//     }
//     get currentspeed(){
//         return this.speed/1.6
//     }
//     set currentspeed(speed){
//         return speed*1.6
//     }   
// }

// const car2= new checkspeed('bmw',120)
// car2.currentspeed=200
// console.log(car2.currentspeed);

// console.log(car2.currentspeed);





// coding challeng :- 3


// const car = function (make,speed){
//     this.make=make
//     this.speed=speed;
// }

// car.prototype.accelerate = function (){
//     this.speed += 10
//     console.log(`${this.make} is going at ${this.speed}km/h`);
// }
// car.prototype.brake = function (){
//     this.speed -= 5
//     console.log(`${this.make} is going at ${this.speed}km/h`);
// }

// const Ev = function(make,speed,charge){
//     car.call(this,make,speed)
//     this.charge=charge
// }
// //  link the prototype

// Ev.prototype=Object.create(car.prototype)
// Ev.prototype.chargeBattery = function(chargeTo){
//     this.charge=chargeTo
// }

// Ev.prototype.accelerate=function(){
//     this.speed+=20
//     this.charge--
//     console.log(`${this.make} is going at ${this.speed}km/h , with acharge of ${this.charge}`);

// }

// const tesla = new Ev('tesla',120,23)
// console.log(tesla);
// tesla.chargeBattery(90)
// tesla.brake()
// tesla.accelerate()







// coding  challange -4


class carCl {
    constructor(make,speed){
        this.make=make;
        this.speed=speed;
    }
    accelerate(){
        this.speed+=10
        console.log(`${this.make} cae speed is ${this.speed}`);
    }
    break(){
        this.speed-=10
        console.log(`${this.make} cae speed is ${this.speed}`);
        return this
    }
    get speedUs(){
        return this.speed / 1.6
    }
    set speedUs(speed){
        this.speed = speed * 1.6
    }
}

class EvCl extends carCl{
// create private
#charge;
constructor(make,speed,charge){
        super(make,speed)
        this.#charge=charge
    }
    // //  link the prototype
    
    // Ev.prototype=Object.create(car.prototype)
    chargeBattery(chargeTo){
        this.#charge=chargeTo
        return this
    }
    
   accelerate(){
        this.speed+=20
        this.#charge--
        console.log(`${this.make} is going at ${this.speed}km/h , with acharge of ${this.#charge}`);
        return this
    
    }    
}

const rivian=new EvCl('farari',150,23)
// console.log(rivian.#charge);
rivian.accelerate().accelerate().accelerate().chargeBattery(50).accelerate().break() //class chaining 
console.log(rivian.speedUs);