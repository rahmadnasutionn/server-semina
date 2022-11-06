const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const categorySchema = Schema({
    name: {
        type: String,
        minlength: [3, 'Panjang minimal category 3 karakter'],
        maxlength: [20, 'Panjang maximal category 3 karakter'],
        required: true,
    },
    organizer: {
        type: mongoose.Types.ObjectId,
        ref: 'Organizer',
        required: true,
    },
}, { timestamps: true });

module.exports = model('Category', categorySchema);