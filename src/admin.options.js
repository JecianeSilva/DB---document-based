const AdminBro = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const { Library } = require('./libraries/library.entity');

/** @type {AdminBro.AdminBroOptions}*/

const options ={
    resources:[Library],
};

module.exports = options;