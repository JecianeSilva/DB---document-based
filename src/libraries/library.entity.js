const mongoose = require('mongoose');

const LibrarySchema = new mongoose.Schema({
    libraryName: {
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    adress:{
        type: String,
    }
});

const Library = mongoose.model('Library',LibrarySchema);

module.exports = { LibrarySchema, Library };