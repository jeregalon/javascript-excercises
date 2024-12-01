/*Manejo de usuarios mediante la clase User. Los usuarios se guardan en
la variable users y cada uno de ellos es un objeto donde se guardan un
nombre, un apellido y una dirección de email*/

let users = new Map()

class User {
    #firstName
    #lastName
    #email
    constructor({firstName, lastName, email}) {
        this.#firstName = firstName
        this.#lastName = lastName
        this.#email = email
    }
    set firstName(firstName) {
        this.#firstName = firstName
    }
    set lastName(lastName) {
        this.#lastName = lastName
    }
    set email(email) {
        this.#email = email
    }
    get firstName() {
        return this.#firstName
    }
    get lastName() {
        return this.#lastName
    }
    get email() {
        return this.#email
    }
}

class Users {
    constructor() {}
    static add({firstName, lastName, email})  {
        users.set(email, `${firstName} ${lastName}`)
    }
    static delete(email) {
        users.delete(email)
    }
    static get(email) {
        return users.get(email)
    }
    static getAll() {
        users.forEach((value, key) => console.log(value))
    }
}

let user1 = new User({firstName: "Gonzalo", lastName: "Álvarez", email: "gonzalo@gmail.com"})

console.log(user1.firstName)
console.log(user1.lastName)
console.log(user1.email)

Users.add(user1)

user1.firstName = "Pablito"
user1.lastName = "González"
user1.email = "pablito@gmail.com"

console.log(user1.firstName)
console.log(user1.lastName)
console.log(user1.email)

Users.add(user1)

console.log(users)

Users.delete(user1.email)

console.log(users)

console.log(Users.get("gonzalo@gmail.com"))

let user2 = new User({firstName: "Pedro", lastName: "Juárez", email: "pedrito2345@gmail.com"})
let user3 = new User({firstName: "Antonio", lastName: "Hernández", email: "antonioher@gmail.com"})
let user4 = new User({firstName: "José", lastName: "Basulto", email: "josebas@gmail.com"})

Users.add(user2)
Users.add(user3)
Users.add(user4)
Users.delete(user1.email)

Users.getAll()
