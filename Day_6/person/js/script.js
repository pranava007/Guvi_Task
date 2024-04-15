class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        return this.age;
    }

    getEmail() {
        return this.email;
    }

    updateEmail(newEmail) {
        this.email = newEmail;
    }
}

// Example usage:
let person1 = new Person("pranava", "muthu", 22, "pranavamuthu@gmail.com");
console.log(person1.getFullName()); // Output: giri dharan
console.log(person1.getAge()); // Output: 22
console.log(person1.getEmail()); // Output: giridharan831@gmail.com

person1.updateEmail("prana@gmail.com");
console.log(person1.getEmail()); // Output: giridharan831@gmail.com
