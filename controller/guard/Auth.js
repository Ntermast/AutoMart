class Auth {

    isLogged(req,res,next){
        if (req.session.UserAuth) {
            return res
                    .redirect("/");
        }
        next();
    }

    notLogged(req,res,next){
        next();
    }

}

module.exports = Auth;