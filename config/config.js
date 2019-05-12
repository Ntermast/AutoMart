const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");

global.uses = (string) => {
    const str = string.split(".");
    const c = require(path.resolve(str[0]));
    const f = new c();
    if (!f[str[1]]) {
        return f;
    }
    return f[str[1]];
};

const config = {
    register(){
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(session({
            secret: "demo",
            saveUninitialized: true,
            resave: true,
            cookie:{secure: false}
        }));
    },
    static() {
        app.use("/assets",express.static(path.resolve("./public/assets")));
    },
    views() {
        app.use(require("express-edge"));
        app.set("views", path.resolve("views"));
    },
    middlware(){
        app.use(require("./middlware"));
    },
    router() {
        app.use(require("./router"));
    },
    start() {
        app.listen(8080,() => { 
            console.log("Ecoute sur le port 8080 ..."); 
        });
    },
};

const init = {
    init: () => {
        for (const key in config) {
            config[key]();
        }
    },
    config: config
};

module.exports = init;