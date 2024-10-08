const express = require("express");
const next = require("next");

const port = 3000;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.get("/home", (req, res) => {
        return app.render(req, res, "/Home");

    })
    server.get("/about", (req, res) => {
        return app.render(req, res, "/About");
        
    })
    server.get("*", (req, res) => {
        return handle(req, res);
        
    })

    server.listen(port, (err) => {
        if(err)
            throw err;
        console.log("listening on", port);
    })
})