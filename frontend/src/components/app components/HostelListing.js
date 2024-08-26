import { useEffect, useState } from 'react';
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import { TableCell, TableRow, TableHead, TableBody, Table } from "../ui/table"
import { Checkbox } from "../ui/checkbox"
import Cookies from 'js-cookie';
import axios from 'axios';
import Hostelnav from '../header/Hostelnav';
import Footer from '../header/Footer';

export default function HostelListing() {
    const [hostelData, setHostelData] = useState({
        name: '',
        description: '',
        address: '',
        city:"",
        rooms: []
    });

    // useEffect(() => {
    //     // Fetch room data from the backend API
    //     const fetchRooms = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:5000/owner/listing');
    //             setHostelData(response.data);
    //         } catch (error) {
    //             console.error('Error fetching room data:', error);
    //         }
    //     };

    //     fetchRooms();
    // }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setHostelData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleRoomInputChange = (index, e) => {
        const { name, value } = e.target;
        const rooms = [...hostelData.rooms];
        // Check if the property being updated is amenities
        if (name === 'amenities') {
            rooms[index][name] = value.split(',').map(item => item.trim()); // Split amenities by commas
        } else {
            rooms[index][name] = value;
        }
        setHostelData(prevData => ({
            ...prevData,
            rooms
        }));
    };


    const addRoom = () => {
        setHostelData(prevData => ({
            ...prevData,
            rooms: [...prevData.rooms, {
                roomNumber: '',
                capacity: '',
                availableSeats: '',
                price: '',
                amenities: ''

            }]
        }));
    };

    const access_token = Cookies.get('access_token');
    const submitForm = async () => {
        console.log('Hostel Data:', hostelData);
        try {
            // Check if any of the required fields in any room are empty
            const emptyFields = hostelData.rooms.some(room => {
                console.log('Room:', room);
                return !room.roomNumber || !room.capacity || !room.availableSeats || !room.price || !room.amenities.length;
            });
           
            if (emptyFields) {
                console.error('Please fill in all the required fields for each room.');
                return; 
            }

            const response = await axios.post('http://localhost:5000/owner/listing', hostelData, {
                headers: {
                    Authorization: access_token,
                    'Content-Type': 'application/json'
                }
            });
            console.log('Hostel created:', response.data);
            alert("Hostel Created")
        } catch (error) {
            console.error('Error creating hostel:', error);
        }
    };


    return (
        <>
         <div className="flex flex-col bg-gradient-to-br from-indigo-500 to-blue-500 ">\
           <Hostelnav/>
           <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-lg max-w-md mt-8">

      
        <div className="max-w-md mx-auto"> {/* Set maximum width for content */}
          <div className="grid gap-6 sm:gap-8 lg:gap-10">
              <div className="grid gap-2">
                  <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">
                      <Label className="text-sm" htmlFor="name">
                          Hostel Name
                      </Label>
                      <Input id="name" name="name" value={hostelData.name} onChange={handleInputChange} placeholder="Enter hostel name" />
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400">
                      <Label className="text-sm" htmlFor="description">
                          Description
                      </Label>
                      <Textarea id="description" name="description" value={hostelData.description} onChange={handleInputChange} placeholder="Enter description" />
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                      <Label className="text-sm" htmlFor="address">
                          Address
                      </Label>
                      <Input id="address" name="address" value={hostelData.address} onChange={handleInputChange} placeholder="Enter address" />
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                      <Label className="text-sm" htmlFor="city">
                          City
                      </Label>
                      <Input id="city" name="city" value={hostelData.city} onChange={handleInputChange} placeholder="Enter city" />
                  </p>
              </div>
              <div className="grid gap-4 sm:gap-8">
                  <div className="grid gap-2">
                      <h2 className="text-xl font-semibold">Add a room</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                          Fill in the details below to add a room to your property.
                      </p>
                  </div>
                  <div className="grid gap-4">
                      {hostelData.rooms.map((room, index) => (
                          <div key={index} className="grid gap-2">
                              <Label className="text-sm" htmlFor={`room-number-${index}`}>
                                  Room number
                              </Label>
                              <Input id={`room-number-${index}`} name="roomNumber" value={room.roomNumber} onChange={(e) => handleRoomInputChange(index, e)} placeholder="Enter room number" />
                              <Label className="text-sm" htmlFor={`capacity-${index}`}>
                                  Capacity
                              </Label>
                              <Input id={`capacity-${index}`} name="capacity" value={room.capacity} onChange={(e) => handleRoomInputChange(index, e)} placeholder="Enter capacity" />
                              <Label className="text-sm" htmlFor={`available-seats-${index}`}>
                                  Available seats
                              </Label>
                              <Input id={`available-seats-${index}`} name="availableSeats" value={room.availableSeats} onChange={(e) => handleRoomInputChange(index, e)} placeholder="Enter available seats" />
                              <Label className="text-sm" htmlFor={`price-${index}`}>
                                  Price
                              </Label>
                              <Input id={`price-${index}`} name="price" value={room.price} onChange={(e) => handleRoomInputChange(index, e)} placeholder="Enter price" />
                              <Label className="text-sm" htmlFor={`amenities-${index}`}>
                                  Amenities
                              </Label>
                              <Textarea className="min-h-[100px]" id={`amenities-${index}`} name="amenities" value={room.amenities} onChange={(e) => handleRoomInputChange(index, e)} placeholder="Enter amenities" />
                              <p className="text-xs text-gray-500 dark:text-gray-400">Enter amenities separated by commas</p>
                          </div>
                      ))}
                      <Button size="sm" onClick={addRoom}>Add room</Button>
                      <Button size="sm" onClick={submitForm}>Submit</Button>
                  </div>
              </div>
              <Separator />
              <div className="grid gap-4">
                  <div className="grid gap-2">
                      <h2 className="text-xl font-semibold">Rooms</h2>
                      {/* Room table */}
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                      <Table>
                          <TableHead>
                              <TableRow>
                                  <TableCell className="w-12" />
                                  <TableCell>Room number</TableCell>
                                  <TableCell>Capacity</TableCell>
                                  <TableCell>Available seats</TableCell>
                                  <TableCell>Price</TableCell>
                                  <TableCell>Amenities</TableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              {hostelData.rooms.map((room, index) => (
                                  <TableRow key={index}>
                                      <TableCell>
                                          <Checkbox />
                                      </TableCell>
                                      <TableCell>{room.roomNumber}</TableCell>
                                      <TableCell>{room.capacity}</TableCell>
                                      <TableCell>{room.availableSeats}</TableCell>
                                      <TableCell>{room.price}</TableCell>
                                      <TableCell>{room.amenities}</TableCell>
                                  </TableRow>
                              ))}
                          </TableBody>
                      </Table>
                    
                    </div>
                  </div>
              </div>
          </div>
          </div></div>
         
      </>

    )
}
