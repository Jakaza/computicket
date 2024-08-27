const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    imageUrls: [{ type: String }],
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    address: {type : String},
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    price: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    organizer: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;