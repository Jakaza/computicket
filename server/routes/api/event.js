const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const role = require('../../middleware/role');
const { ROLES } = require('../../constants');

// Bring in Models & Helpers
const Event = require('../../models/event');

router.get('/events', async (req, res) => {

    res.json({message: "Events working"})


})


router.post(
    '/add',
    auth,
    role.check(ROLES.Admin, ROLES.Merchant),
    async (req, res) => {
      try {
        const name = req.body.name;
        const description = req.body.description;
        const latitude = req.body.latitude;
        const longitude = req.body.longitude;
        const address = req.body.address;
        const price = req.body.isActive;

        if (!description || !name) {
          return res
            .status(400)
            .json({ error: 'You must enter description & name.' });
        }
  
        if (!latitude) {
          return res.status(400).json({ error: 'You must enter a latitude.' });
        }
        if (!longitude) {
          return res.status(400).json({ error: 'You must enter a longitude.' });
        }
        if (!address) {
          return res.status(400).json({ error: 'You must enter a address.' });
        }
  
        if (!price) {
          return res.status(400).json({ error: 'You must enter a price.' });
        }
  
        const foundEvent = await Event.findOne({ name });
  
        if (foundEvent) {
          return res.status(400).json({ error: 'This name is already in use.' });
        }
  
        const event = new Event({
          name,
          description,
          latitude,
          latitude,
          price,
          address
        });
  
        const savedEvent = await event.save();
  
        res.status(200).json({
          success: true,
          message: `Product has been added successfully!`,
          event: savedEvent
        });
      } catch (error) {
        return res.status(400).json({
          error: 'Your request could not be processed. Please try again.'
        });
      }
    }
  );
  



module.exports = router;