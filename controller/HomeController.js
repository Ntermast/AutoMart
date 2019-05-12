const User = uses("model/Users");

class HomeController {

    async index(req,res){
       return res
                .render("index");
    }

    async login(req,res){
        return res
                .render("login");
    }

}

module.exports = HomeController;