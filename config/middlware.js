const express = require("express");
const app = express();

app.use((req ,res ,next) => {
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

app.use((req,res,next) => {
    if (req.session.UserAuth) {
        res.locals.UserAuth = req.session.UserAuth;
    }
    next();
});

module.exports = app;