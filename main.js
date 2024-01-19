// class 1

// class Rectangle {
//     #width;
//     #height;
//     constructor(width,height){
//         this.#width = width;
//         this.#height = height
//     }
//     getWidth(){
//         return this.#width;
//     }
    
//     getHeight(){
//         return this.#height;
//     }
//     setSides(a,b){
//         this.#width = a;
//         this.#height = b;
//     }
//     get perimetr(){
//         return 2*(this.#width + this.#height);
//     }
//     get area(){
//         return (this.#width * this.#height)
//     }
// }

// let r1 = new Rectangle(10,20);
// r1.setSides(30,40)
// console.log(r1.getWidth());
// console.log(r1.getHeight());

// console.log(r1.perimetr);
// console.log(r1.area);

// class 2

// let obj = {
//     a : 1,
//     b : 2,
//     c : 3,
// }

// // console.log(Object.keys(obj));

// Object.customKeys = function(obj){
//     let res = [];
//     for(key in obj){
//         res.push(key);
//     }
//     return res ;
// }

// console.log(Object.customKeys(obj ));


// class 3

// class Employee {
//     #id
//     #firstName
//     #lastName
//     #salary

//     constructor(id,firstName,lastName,salary){
//         this.#id = id;
//         this.#firstName = firstName;
//         this.#lastName = lastName;
//         this.#salary = salary;
//     }

//     getId(){
//         return this.#id;
//     };
//     getFirstName(){
//         return this.#firstName;
//     };
//     getLastName(){
//         return this.#lastName;
//     };
//     getSalary(){
//         return this.#salary;
//     };
//     setId(id){
//         return this.#id = i;
//     };
//     setFirstName(fName){
//         return this.#firstName = fName;
//     };
      
//     setLastName(lName){
//         return this.#lastName = lName;
//     };
//     setSalary(s){
//         return this.#salary = s;
//     };
//     getFullName(){
//         return (this.#firstName + this.#lastName)
//     };
// }

// let E = new Employee(3,"yahyojon","nabijonov",'2000$')
//   console.log(E.getId());
//   console.log(E.getfirstName());
//   console.log(E.getlastName());
//   console.log(E.getsalary());

// class 4


// class customDate {
//     #day;
//     #month;
//     #year;
//    constructor(day,month,year){
//     this.#day = day;
//     this.#month = month;
//     this.#year = year;
//    }
//     getDay(){
//         return this.#day;
//     };
//     getMonth(){
//         return this.#month;
//     };
//     getYear(){
//         return this.#year
//     };
//     setDay(d){
//         this.#day = d;
//     };
//     setMonth(m){
//         this.#month = m;
//     };
//     setYear(y){
//         this.#year = y;
//     };

// }

// let c = new customDate(12,1,2024);

// c.setDay(2)
// c.setMonth(11)
// c.setYear(2025)

// console.log(c.getDay());
// console.log(c.getMonth());
// console.log(c.getYear());

// class  5

// class Time {
//     #hour
//     #minute
//     #second
//    constructor(hour,minute,second){
//     this.#hour = hour;
//     this.#minute = minute;
//     this.#second = second;
//    }
//    getHour(){
//     return this.#hour
//    }
//     getMinute(){
//         return this.#minute;
//     }
//     getSecond(){
//         return this.#second
//     }
//     setHour(H){
//        return this.#hour = H;
//     };
//     setMinute(M){
//         return this.#minute = M;
//     };
//     setSecond(){
//         return this.#second = S;
//     };
//     getfull(){
//         return this.#hour , this.#minute ,this.#second
//     }

// }

// let T = new Time(2, 30 , 24);

// console.log(T.getHour());
// console.log(T.getMinute());
// console.log(T.getSecond());
// console.log(T.getfull());

// class 6

