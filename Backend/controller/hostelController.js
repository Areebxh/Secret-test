const express = require('express');
const router = express.Router();
const Hostel = require('../models/hostelModel');
const Room = require('../models/roomModel');
const Announcement=require("../models/Announcement")

const hostelListing = async (req, res) => {
    try {
      const { name, description, address,city, rooms } = req.body;
  
      // Validate request body
      if (!name || !description || !address || !rooms || rooms.length === 0) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
  
      // Create a new hostel with the owner ID
      const newHostel = await Hostel.create({
        name,
        description,
        address,
        city,
        owner: req.userId, // Set the owner to the extracted user ID from the token
      });
  
      // Create rooms for the hostel
      const createdRooms = await Room.create(
        rooms.map((room) => ({
          hostel: newHostel._id,
          roomNumber: room.roomNumber,
          capacity: room.capacity,
          availableSeats: room.availableSeats, 
          price: room.price,
          amenities: room.amenities || [],
        }))
      );
  
      // Update the hostel with the created room IDs
      newHostel.rooms = createdRooms.map((room) => room._id);
      await newHostel.save();
  
      res.status(201).json({ hostel: newHostel, rooms: createdRooms });
    } catch (error) {
      console.error('Error creating hostel:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  


//   const postAnnouncement = async (req, res) => {
//     try {
//         const { title, content, hostelId } = req.body;
//         const ownerId = req.userId; // Assuming ownerId is used to store the owner's ID
        
//         // Check if the authenticated user owns the hostel with the provided ID
//         const hostel = await Hostel.findOne({ _id: hostelId, owner: ownerId });

//         if (!hostel) {
//             return res.status(403).json({ error: "You are not authorized to create announcements for this hostel." });
//         }
        
//         // Create the announcement
//         const announcement = await Announcement.create({
//             title,
//             content,
//             owner: ownerId, // Set the owner to the extracted user ID from the token
//             hostel: hostelId // Set the hostel ID
//         });

//         res.status(201).json({ announcement });
//     } catch (error) {
//         console.error('Error creating announcement:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };
  

const postAnnouncement = async (req, res) => {
    try {
        const { title, content, hostelId } = req.body;
        const owner = req.userId; // Assuming userId is available in the request object after authentication

        // Create a new announcement document
        const newAnnouncement = new Announcement({
            title,
            content,
            hostel: hostelId, // Use hostelId to assign to the hostel field
            owner
        });

        // Save the announcement to the database
        await newAnnouncement.save();

        res.status(201).json({ msg: "Announcement submitted successfully" });
    } catch (error) {
        console.error("Error submitting announcement:", error);
        res.status(500).json({ msg: "An error occurred while submitting announcement" });
    }
};

  



module.exports = {hostelListing,postAnnouncement};