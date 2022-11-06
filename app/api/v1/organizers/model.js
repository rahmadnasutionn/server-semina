const mongooose = require('mongoose');
const { model, Schema } = mongooose;

let organizerSchema = Schema({
    organizer: {
        type: String,
        required: [true, 'Penyelenggara harus diisi'],
    },
}, { timestamps: true });

module.exports = model('Organizer', organizerSchema);