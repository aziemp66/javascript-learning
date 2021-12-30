let age = 30;
let userName = "Azie";
let hobbies = ["Gaming", "Heavy-Lifting", "Programming"];
let job = {
    title: "Fullstack Developer",
    place: "Remote",
    salary: 150000,
};

let adultYears;

function calculateAdultYears(userAge) {
    return userAge - 18;
}

alert(calculateAdultYears(age));

alert(calculateAdultYears(45));

/* let userAge = 18;
let greetingText = "Hi, I'm Azie!!!";
alert(greetingText);
greetingText = "Hi, I am Melza!!!";
alert(greetingText);
alert("I am " + userAge + " Years old");
 */
