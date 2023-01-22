const express = require('express')
const Event = require('../models/eventModel')
const eventsRouter = express.Router();


eventsRouter.post('/add', async (req, res) => {
    let eventInfo = req.body;
    if (await Event.findOne({ name: eventInfo.name, location: eventInfo.location,date: eventInfo.date, time: eventInfo.time })) {
        return res.send("The event is already registered")
    }
    try {
        res.send(await Event.create({ name: eventInfo.name, location: eventInfo.location,date:eventInfo.date, time: eventInfo.time }))
    }
    catch (err) {
        res.send(err)
    }
}
);
module.exports = eventsRouter