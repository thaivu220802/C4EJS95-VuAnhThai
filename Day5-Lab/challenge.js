const mark = {
    fullname: "Mark",
    mass: 72,
    height: 165,
}

const john = {
    fullname: "John",
    mass: 56,
    height: 157,
}

// Add method to calculate BMI
mark.bmi = function () {
    return this.mass / (this.height / 100) ** 2;
}
john.bmi = function () {
    return this.mass / (this.height / 100) ** 2;
}

// log highest BMI

if (mark.bmi() > john.bmi()) {
    console.log(`The person with the higher BMI is:
    Name: ${mark.fullname}
    BMI: ${Math.round(mark.bmi() * 100)/ 100}`);
} else if (john.bmi () > mark.bmi()) {
    console.log(`The person with the higher BMI is:
    Name: ${john.fullname}
    BMI: ${Math.round(john.bmi() * 100)/ 100}`);
} else {
    console.log(`Same BMI`);
}