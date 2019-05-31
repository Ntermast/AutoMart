const User = uses("model/Users");

class HomeController {

    index(req,res){
    console.log(User.getUsers);

       return res
                .render("index");
    }

    login(req,res){
        return res
                .render("login");
    }

    newCar(req,res){
        
    }

    dealers(req,res){

    }

    post_ad(req,res){

    }

    request_car(req,res){

    }

    trade_in(req,res){

    }

    get_alert(req,res){

    }

}

module.exports = HomeController;