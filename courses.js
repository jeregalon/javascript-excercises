/** Manejo de usuarios de una escuela utilizando las clases Teacher y Student, las cuales
 * heredan de User. Las instancias de estas clases almacenan un nombre, un apellido, una
 * dirección de email y un rol (maestro, alumno u otro). Cada uno tiene, además, una lista 
 * de cursos que imparte o desea recibir, además de que se pueden enviar mensajes entre
 * ellos.
 */

let users = []

class Tutoring {
    constructor() {}
    static getStudentByName(_name, _surname) {
        let ind = users.findIndex(u => u && u.name ===_name && u.surname ===_surname && u.role === "student")
        return ind !== -1 ? users[ind] : ""
    }
    static getTeacherByName(_name, _surname) {
        let ind = users.findIndex(u => u && u.name ===_name && u.surname ===_surname && u.role === "teacher")
        return ind !== -1 ? users[ind] : ""
    }
    static getStudentsForTeacher(_teacher) {
        let ind = users.findIndex(u => u && u.role === "student" && User.match(_teacher, u).length !== 0)
        return ind !== -1 ? [`${users[ind].name} ${users[ind].surname}`] : []
    }
    static addStudent({name, surname, email}) {
        new Student({name, surname, email})
    }
    static addTeacher({name, surname, email}) {
        new Teacher({name, surname, email})
    }
}

class User {
    localMessages = []
    constructor({name, surname, email, role}) {
        this.name = name
        this.surname = surname
        this.email = email
        this.role = role
        users.push(this)
        this.courses = []
    }
    addCourse({course, level}) {
        this.courses.push({course, level})
    }
    removeCourse(_course) {
        delete this.courses[this.courses.findIndex(c => c && c.course === _course)]        
    }
    editCourse(_course, _level) {
        let ind = this.courses.findIndex(c => c && c.course === _course)
        this.courses[ind].level = _level        
    }
    static sendEmail(rem, dest, message) {
        for (let u of users) {
            if (dest.includes(u)) {
                let newMessage = `${rem.name} ${rem.surname}:\n${message}`
                u.localMessages.push(newMessage)
            }
        }
    }
    static match(_teacher, _student) {
        if (_teacher.role === "teacher" && _student.role === "student") {
            let matches = []
            for (let tc of _teacher.courses) {
                for (let sc of _student.courses) {
                    if (tc.course === sc.course && tc.level >= sc.level) matches.push(tc.course)
                }   
            }
            console.log(matches)
            return matches
        } else {
            console.log("Llamada a match incorrecta -> Debe ser User.match(_teacher, _student)")
            return
        }
            
    }
    showAllCourses() {
        this.courses.forEach(c => console.log(`${c.course}, ${c.level}`))
    }
    showMessagesHistory() {
        let ind = users.findIndex(u => u && u === this)
        users[ind].localMessages.forEach(
            m => {
                console.log(m)
                console.log("------------------------")
            })
    }
}

class Student extends User {
    constructor({name, surname, email}) {
        super({name, surname, email, role: "student"})
        this.courses = []
    }
}

class Teacher extends User {
    constructor({name, surname, email}) {
        super({name, surname, email, role: "teacher"})
        this.courses = []
    }
}


let user1 = new Teacher({name: "Antonio", surname: "Jiménez", email: "antoniojimenez@gmail.com"})
user1.addCourse({course : "Physics", level: 4})
user1.addCourse({course : "Math", level: 3})
user1.addCourse({course : "Control", level: 5})
user1.addCourse({course : "Measurements", level: 2})

let user2 = new Student({name: "José", surname: "Pérez", email: "josepere@yahoo.com"})
user2.addCourse({course : "Physics", level: 2})
user2.addCourse({course : "Math", level: 2})
user2.addCourse({course : "History", level: 5})
user2.addCourse({course : "Measurements", level: 5})

let user3 = new User({name: "Esperancejo de la Caridad", surname: "Domínguez", email: "espera@thunderbird.com", role: "principal"})

Tutoring.addStudent({name: "Edmundo", surname: "González", email: "edmundo@gmail.com"})

Tutoring.addTeacher({name: "Michael", surname: "Chandler", email: "michael@gmail.com"})

User.sendEmail(user1, [user2], "José Pérez qué hace usted faltando a clases!!! Tiene que ser un buen muchacho")

User.sendEmail(user3, [user1, user2], "A mi oficina urgente!!")

// // Imprimir listado de estudiantes y maestros
// users.forEach(u => {
//     console.log("------------------------")
//     for (let key in u) {
//         console.log(`${key}: ${u[key]}`)
//     }
// })

user2.showMessagesHistory()