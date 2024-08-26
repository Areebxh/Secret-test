import { useState } from 'react';
import axios from 'axios';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "../ui/card"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import Cookies from 'js-cookie';
import Navbar from '../header/Navbar';
import { Nav } from 'react-bootstrap';
import Hostelnav from '../header/Hostelnav';

export default function Ownerfeedback() {
  const [feedbackText, setFeedbackText] = useState('');

const access_token = Cookies.get('access_token');
  const handleSubmitFeedback = async () => {
    try {
          await axios.post('http://localhost:5000/user/feedback', { feedback: feedbackText }, {
          headers: {
            Authorization: access_token
          }}
          );
         

      // If successful, show a success message to the user
      alert('Feedback submitted successfully!');
      
      // Clear the feedback text after submission
      setFeedbackText('');
    } catch (error) {
      // If an error occurs, log the error and show an error message to the user
      console.error('Error submitting feedback:', error);
      alert('An error occurred while submitting feedback. Please try again later.');
    }
  };

  return (
  <div className="flex flex-col bg-gradient-to-br from-indigo-500 to-blue-500 ">
      <Hostelnav/>
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-500 to-blue-500">
    {/* Background shapes */}
    <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-purple-300 mix-blend-multiply" />
    <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-300 mix-blend-multiply" />
   
    
    {/* Feedback card */}
    <Card className="w-full max-w-md mx-auto p-6 rounded-lg shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold">Feedback</CardTitle>
        <CardDescription className="text-center">We value your feedback!</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center mt-4">
        <div className="grid w-full gap-4">
          <Textarea 
            placeholder="Enter your feedback." 
            value={feedbackText} 
            onChange={(e) => setFeedbackText(e.target.value)} 
            className="border border-gray-300 rounded-md p-2"
          />
          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-300" onClick={handleSubmitFeedback}>Submit</Button>
        </div>
      </CardContent>
    </Card>
  </div>
  </div>
  )
}
