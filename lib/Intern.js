// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Intern = require("./Employee")

class Intern {
    constructor(name, id, email){
        super(name, id, email, school);
        this.school = school;
    }
getSchool(){
    return this.school;
}

getRole(){
    return Intern;
}

}


module.exports = Intern;