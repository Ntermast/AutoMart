class Auth {

    isLogged(req,res,next){
        if (req.session.UserAuth) {            
            return res
                    .redirect("/");
        }
        next();
    }

    notLogged(req,res,next){
        if (!req.session.UserAuth) {
            return res
                    .redirect("/login");
        }
        next();
    }

}

module.exports = Auth;