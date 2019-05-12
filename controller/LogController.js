const validator = require("validator");
const User = uses("model/Users");
const bcrypt = require("bcrypt");
const suid = require("rand-token").suid;
let token = suid(16);

class LogController{

    async register(req,res){
        const users = req.body;
        for (const user in users) {
            if (users[user].trim() == "") {
                req.flash("error_regiter","Please fill all fields");
                return res
                        .status(401)
                        .redirect(users.urlOrigin);
            }
        }
        if (!validator.isEmail(users["email"])) {
            req.flash("error_regiter","Email Invalid");
            return res
                    .status(401)
                    .redirect(users.urlOrigin);
        }
        for (const key of User.getUsers) {
            if (key.email == users["email"]) {
                req.flash("error_regiter","User Email Exist");
                return res
                        .status(401)
                        .redirect(users.urlOrigin);
            }
        }
        const id = User.getUsers.length + 1;
        const newUser = {
                id: id,
                token:token,
                email: users["email"],
                first_name: users["first_name"],
                last_name: users["last_name"],
                password: await bcrypt.hash(users["password"],10),
                address: users["address"],
                is_admin: false
            };
        await User.addUser(newUser);
        req.flash("success_regiter","User has been regitred successfuly");

        return await res
                        .status(200)
                        .redirect(users.urlOrigin);
    }

    async login(req,res){
        console.log(req.body);
    }

}

module.exports = LogController;