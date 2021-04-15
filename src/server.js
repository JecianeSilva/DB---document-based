const express = require('express');
const { default: AdminBro} = require('admin-bro');
const options = require('./admin.options');
const buildAdminRouter = require('./admin.router');
const mongoose = require('mongoose');

var app = express();
const port = 3000;

const run = async () =>{

    await mongoose.connect('mongodb://localhost:27017/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

    const admin = new AdminBro(options);
    const router = buildAdminRouter(admin);

    app.use(admin.options.rootPath, router);

    // server.library.insert({
    //     libraryName: "Biblioteca chave-valor",
    //     phone: "(84) 9 1111-1111",
    //     email: "bib_chave-valor@bd.com",
    //     adress:"Rua Chave valor, 1. Mossoró-RN"
    // })

    app.listen(port, () => console.log(
        `Example app listen at http://localhost:${port}`,
    ));
}

module.exports = run;
