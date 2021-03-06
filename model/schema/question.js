const T = require('mongoose').Schema.Types;
const qTypes = require('../../config').db.question.types;
module.exports = {
    plugin: {
        createdmodified: {
            index: true
        }
    },
    schema: {
        body: {
            type: T.String,
            trim: true,
            text: true,
            required: true,
            unique: true
        },
        options:{
            type: T.Mixed
        },
        correct:{
            select: false,
            type: T.Mixed
        },
        type:{
            type: T.String,
            enum: qTypes,
            trim: true,
            text: true,
            required: true
        }
    }
}
