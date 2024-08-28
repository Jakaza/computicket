const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const role = require('../../middleware/role');
const { ROLES } = require('../../constants');

// Bring in Models & Helpers
const Event = require('../../models/event');


router.get('/', 
  auth,
  role.check(ROLES.Admin, ROLES.Merchant),  async (req, res) => {
  try {

    const events = await Event.find({ organizer: req.user._id })
        .populate('organizer');

        if (events.length <= 0) {
          return res.status(404).json({
            success: true,
            message: 'No event found.'
          });
        }
    

    res.status(200).json({
      success: true,
      message: `events has been fetched successfully!`,
      events: events
    });
    
  } catch (error) {
    console.log(error);
        
    return res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
})

router.get('/:id', 
  auth,
  role.check(ROLES.Admin, ROLES.Merchant),  async (req, res) => {
  try {

    const eventId = req.params.id;

    const events = await Event.find({_id : eventId , organizer: req.user._id })
        .populate('organizer');

      
        
    if (events.length <= 0) {
      return res.status(404).json({
        success: true,
        message: 'No event found.'
      });
    }


    res.status(200).json({
      success: true,
      message: `events has been fetched successfully!`,
      events: events
    });
    
  } catch (error) {
    console.log(error);
        
    return res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
})

router.put(
  '/:id',
  auth,
  role.check(ROLES.Admin, ROLES.Merchant),
  async (req, res) => {
    try {
      const eventId = req.params.id;
      const update = req.body;
      const query = { _id: eventId , organizer: req.user._id };

      await Event.findOneAndUpdate(query, update, {
        new: true
      });

      res.status(200).json({
        success: true,
        message: 'Event has been updated successfully!'
      });
    } catch (error) {
      console.log(error);
      
      res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }
  }
);



router.get('/list',  async (req, res) => {
  try {
    const events = await Event.find()
        .populate('organizer');
    res.status(200).json({
      success: true,
      message: `events has been fetched successfully!`,
      events: events
    });
    
  } catch (error) {
    console.log(error);
        
    return res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
})

router.get('/list',  async (req, res) => {
  try {
    const events = await Event.find()
        .populate('organizer');
    res.status(200).json({
      success: true,
      message: `events has been fetched successfully!`,
      events: events
    });
    
  } catch (error) {
    console.log(error);
        
    return res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
})

router.get('/list/search/:name', async (req, res) => {
  const searchTerm = req.params.name;
  try {
    const regex = new RegExp(searchTerm, 'i'); 
    const eventDoc = await Event.find({ name: { $regex: regex } }).populate('organizer');

    if (eventDoc.length <= 0) {
      return res.status(404).json({
        success: true,
        message: 'No event found.'
      });
    }
    res.status(200).json({
      success: true,
      message: `events has been fetched successfully!`,
      events: eventDoc
    });
  } catch (error) {
    console.log(error); 
    return res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
})




async function fetchEventsWithPagination(page = 1, limit = 10) {
  try {

      page = Math.max(page, 1);
      limit = Math.max(limit, 1);


      const skip = (page - 1) * limit;

      const events = await Event.find()
          .skip(skip)
          .limit(limit)
          .populate('organizer');

      const totalEvents = await Event.countDocuments();
      const totalPages = Math.ceil(totalEvents / limit);

      return {
          events,
          totalEvents,
          totalPages,
          currentPage: page
      };
  } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
  }
}


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
        const price = req.body.price;
        const startDate = req.body.startDate;
        const endDate = req.body.endDate;

        console.log(req.user);

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
          longitude,
          price,
          startDate,
          endDate,
          address,
          organizer : req.user._id
        });
        const savedEvent = await event.save();
        res.status(200).json({
          success: true,
          message: `Product has been added successfully!`,
          event: savedEvent
        });
      } catch (error) {
        console.log(error);
        
        return res.status(400).json({
          error: 'Your request could not be processed. Please try again.'
        });
      }
    }
  );



  



module.exports = router;