const suid = require("rand-token").suid;
const hash = require("bcrypt");
const token = suid(16);

const User = [{
            id: 1,
            token: token,
            email: "admin@gmail.com",
            first_name: "Admin Name",
            last_name: "Admin LastName",
            password: hash.hashSync("admin",10),
            address: "Admin Adress",
            is_admin: true
    }];

class Users{
    
    async addUser(user){
        User.push(user);
    }

    get getUsers(){
        return User;
    }
    
}

module.exports = Users;