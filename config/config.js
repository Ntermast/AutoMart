const express = require("express");
const app = express();
const path = require("path");

const config = {
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