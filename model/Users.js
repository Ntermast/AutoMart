const suid = require("rand-token").suid;
const hash = require("bcrypt");
const token = suid(16);

const User = [{
            id: 1,
            token: token,
            email: "admin@gmail.com",
            first_name: "Gabriel",
            last_name: "Tera",
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

    async getUser(UserId){
        let found = false;
        for (const u of User) {
            if (u.id == UserId) {
                found = u;
            }
        }
        return found;
    }
    
}

module.exports = Users;