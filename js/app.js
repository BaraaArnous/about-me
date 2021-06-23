let  welcomemsg = prompt ('welcome to my website');
console.log (welcomemsg);


let user = prompt(' is your name baraa');
 user.toLowerCase()
function q1() {
    switch (user) {
case 'yes':
case 'y':
alert('like me');
console.log(user);
break;
case 'no':
case 'n':
alert('oops i wish your was name like my name ');
console.log(user);
break;
 }
}
q1();

let input = prompt('do you like a cars');
   input.toLowerCase()
function  q2() {
    switch (input) {
case 'yes':
case 'y':
alert('imazing me too');
console.log(input);
break;
case 'no':
case 'n':
alert('ok but olso marcedes is imazing ');
console.log(input);
break;
 }
}
q2(); 



 let color = prompt('is you favorite color black');
   color.toLowerCase()
 function  q3() {
     switch (color) {
 case 'yes':
 case 'y':
 alert('awosome is my favorite color');
 console.log(color);
 break;
 case 'no':
 case 'n':
 alert('good color too ');
 console.log(color);
 break;
  }
 }
q3();

let cost = prompt('is the cost of the car in your country expinsive');
 cost.toLowerCase()
function q4() {
    switch (cost) {
case 'yes':
case 'y':
alert('also my country tooo');
console.log(cost);
break;
case 'no':
case 'n':
alert('amazing');
console.log(cost);
break;
 }
}
q4();

 function  q5() {
 let car = prompt('do you have racing car ');
 car.toLowerCase()

    switch (car) {
case 'yes':
case 'y':
alert('woow enjoy it');
console.log(car);
break;
case 'no':
case 'n':
alert('you have to see it');
console.log(car);
break;
 }
 }
q5();

let i; 

let o;

for(i=0; i<4; i++ ) {
    let num = prompt ('guess my age');
    if (num<32) {
        alert('im biger more than');
        
    } else  
 if (num > 32){
alert('im smaller than');
console.log (num);
} else
 if  (num == 32){
     alert('your are right');
     i=32; o=true
 }

 if (i=32 && o!=true) {
     alert('try again soon')
 }



 let b; 

let a;

for(b=0; b<4; b++ ) {
    let cou = prompt ('guess my country');
    if (cou == 'syria') {
        alert('you are rigth');
        
    }
} 
 if (cou !='syria'){
alert('its syria ');
console.log (cou);
}
     b="syria"; a=true

 if (b='syria' && a!=true) {
     alert('try again')
 }

}


