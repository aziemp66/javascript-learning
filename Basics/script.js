let age = 30;
let userName = "Azie";
let hobbies = ["Gaming", "Heavy-Lifting", "Programming"];
let job = {
    title: "Fullstack Developer",
    place: "Remote",
    salary: 150000,
};

function calculateAdultYears(userAge) {
    return userAge - 18;
}

console.log(calculateAdultYears(age));

console.log(calculateAdultYears(45));

let person = {
    name: "Max", //Property
    greet() {
        //Method
        console.log("Hello!");
    },
};

person.greet();
