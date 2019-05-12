const express = require("express");
const app = express();

app.use(function(req ,res ,next){
    if (req.session.flash) {
        res.locals.flash = req.session.flash;
        req.session.flash = undefined;
    }

    req.flash = (type,content) => {
        if (!req.session.flash) {
            req.session.flash = {};
        }
        req.session.flash[type] = content;
    };
    next();
});

module.exports = app;