// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Engineer = require("./Employee")

class Engineer {
    constructor(name, id, email){
        super(name, id, email, github);
        this.github = github;
    }
getGithub(){
    return this.github;
}

getRole(){
    return Engineer;

}

}

module.exports = Engineer