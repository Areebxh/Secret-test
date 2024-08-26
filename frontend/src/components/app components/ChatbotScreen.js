

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hzfg9BYIBqp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "../ui/button"
import { CardHeader, CardContent, Card } from "../ui/card"
import chatbot from "../../assets/chatbot.png"
import h1 from "../../assets/n1.jpg"
import h2 from "../../assets/n2.jpg"
import h3 from "../../assets/n3.jpg"
import Navbar from "../header/Navbar"
import { Link } from "react-router-dom"

export default function Chatbot() {
  return (

    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col">
    <Navbar/> 
      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Find the best hostels with Rehaishbot
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Rehaishbot is your personal travel assistant, providing personalized recommendations for the best hostels
              based on your preferences.
            </p>
            <div className="flex space-x-4">
            <Button size="lg" variant="outline" >
               <Link to="/bot">Get Started</Link>
              </Button>
            
            </div>
          </div>
          <div>
            <img alt="Rehaishbot" className="rounded-lg " src={chatbot} />
          </div>
        </div>
      </main>
      <section className="bg-white dark:bg-gray-800 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">How Rehaishbot Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <SearchIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 ml-4">Search</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Tell Rehaishbot your travel preferences, and it will search through thousands of hostels to find the
                best options for you.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <ThumbsUpIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 ml-4">Recommend</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Rehaishbot will provide personalized recommendations for the best hostels based on your preferences and
                budget.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <BookIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 ml-4">Book</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Once you've found the perfect hostel, Rehaishbot will help you book it with ease.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 dark:bg-gray-900 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Featured Hostels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <img alt="Hostel 1" className="rounded-t-lg w-full h-48 object-cover" src={h1} />
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Fatima Girls Hostel</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A cozy and modern hostel in the heart of the city.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <StarIcon className="h-5 w-5 text-primary" />
                    <span className="text-gray-600 dark:text-gray-400">4.8</span>
                  </div>
                  <Button size="sm" variant="primary">
                  
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img alt="Hostel 2" className="rounded-t-lg w-full h-48 object-cover" src={h2}/>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">The King boy Hostel</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A vibrant and social hostel with great amenities.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <StarIcon className="h-5 w-5 text-primary" />
                    <span className="text-gray-600 dark:text-gray-400">4.6</span>
                  </div>
                 
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img alt="Hostel 3" className="rounded-t-lg w-full h-48 object-cover" src={h3} />
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">The Elite Boys Hostel</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">A modern and stylish hostel with great views.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <StarIcon className="h-5 w-5 text-primary" />
                    <span className="text-gray-600 dark:text-gray-400">4.7</span>
                  </div>
                  
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    
    </div>
  )
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}
