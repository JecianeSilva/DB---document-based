const AdminBro = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');
const translations = require("../pt-br.js");


AdminBro.registerAdapter(AdminBroMongoose);

const { Library } = require('./libraries/library.entity');

/** @type {AdminBro.AdminBroOptions}*/

const options ={
    branding:{
        logo: 'https://i.postimg.cc/FHY1syH0/photo5179356609514678668-removebg-preview.png',
        companyName: 'LibAdmin',
        favicon: '',
    },
    dashboard: {
      handler: async () => {
        return { some: 'output' }
      },
      component: AdminBro.bundle('./my-dashboard-component'),
      preventAssignment: false
    },
    resources:[Library],
    locale: {
        translations: {
          ...translations,
        }
      },      
};

module.exports = options;