'use strict'


console.log('hello akshay wel-come to reading oops');


// how to create a class in java script:-

const person=function(firstname,lastname){
    // its calld instance property
    this.firstname=firstname
    this.lastname=lastname
    this.calcagr=function(){
        console.log(2037-lastname);g
    }
    console.log(this);
}

// new keyword creat a empty objects
// function called this {} empty object
// empty link a prototype
// function automaticlly  return 



const a= new person('akshay',1998)
const b= new person('akshay1','pandey1')
const c= new person('akshay2','pandey2')
const d= new person('akshay3','pandey3')


// we can use instanceof property to check object available or not true false value
console.log(a instanceof person);