

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/y4R1xE0wR9R
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {Link} from "react-router-dom"
import { AvatarImage, AvatarFallback, Avatar } from "../../ui/avatar"
import n1 from "../../../assets/n1.jpg"
import n4 from "../../../assets/n4.jpg"
import Hostelnav from "../../header/Hostelnav"

export default function Hostelmain() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
     <Hostelnav/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Effortless Hostel Management
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Streamline your hostel operations with our all-in-one platform. Attract more guests, automate
                    pricing, and manage reviews with ease.
                  </p>
                   
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src={n1}
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Streamline Your Hostel Operations</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our all-in-one platform helps hostel owners attract more guests, automate pricing, and manage reviews
                  with ease.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Easy Listing Management</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Quickly create and update your hostel listings to showcase your property and attract more
                        guests.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Automated Pricing</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Our smart pricing algorithm adjusts your rates based on demand, occupancy, and market trends.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Guest Reviews</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Manage guest reviews and ratings to improve your online reputation and attract more bookings.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src={n4}
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from happy hostel owners who have transformed their businesses with our platform.
              </p>
            </div>
            <div className="divide-y rounded-lg border">
              <div className="grid w-full grid-cols-1 items-stretch justify-center divide-x md:grid-cols-2 lg:grid-cols-3">
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <div className="grid gap-3">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-11 h-11 border">
                        <AvatarImage alt="@username" src="/placeholder-user.jpg" />
                        <AvatarFallback>A</AvatarFallback>
                      </Avatar>
                      <div className="grid">
                        <div className="font-semibold">Areeb</div>
                        <div className="text-gray-500 text-sm dark:text-gray-400">Hostel Owner, Islamabad</div>
                      </div>
                    </div>
                    <div className="font-semibold flex items-center text-xs gap-2">
                      <div className="flex items-center gap-px">
                        <StarIcon className="w-2.5 h-2.5 fill-primary" />
                        <StarIcon className="w-2.5 h-2.5 fill-primary" />
                        <StarIcon className="w-2.5 h-2.5 fill-primary" />
                        <StarIcon className="w-2.5 h-2.5 fill-primary" />
                        <StarIcon className="w-2.5 h-2.5" />
                      </div>
                    </div>
                    <div>
                      "The Hostel Booking App has been a game-changer for my business. It's so easy to manage my
                      listings, automate pricing, and respond to guest reviews."
                    </div>
                  </div>
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <div className="grid gap-3">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-11 h-11 border">
                        <AvatarImage alt="@username" src="/placeholder-user.jpg" />
                        <AvatarFallback>A</AvatarFallback>
                      </Avatar>
                      <div className="grid">
                        <div className="font-semibold">Ahmad</div>
                        <div className="text-gray-500 text-sm dark:text-gray-400">Hostel Owner, Lahore</div>
                      </div>
                    </div>
                    <div className="font-semibold flex items-center text-xs gap-2">
                      <div className="flex items-center gap-px">
                        <StarIcon className="w-2.5 h-2.5 fill-primary" />
                        <StarIcon className="w-2.5 h-2.5 fill-primary" />
                        <StarIcon className="w-2.5 h-2.5 fill-primary" />
                        <StarIcon className="w-2.5 h-2.5 fill-primary" />
                        <StarIcon className="w-2.5 h-2.5" />
                      </div>
                    </div>
                    <div>
                      "I was hesitant to try a new platform, but the Hostel Booking App has exceeded my expectations.
                      It's so user-friendly and has helped me streamline my operations."
                    </div>
                  </div>
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <div className="grid gap-3">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-11 h-11 border">
                        <AvatarImage alt="@username" src="/placeholder-user.jpg" />
                        <AvatarFallback>S</AvatarFallback>
                      </Avatar>
                      <div className="grid">
                        <div className="font-semibold">Shayyan</div>
                        <div className="text-gray-500 text-sm dark:text-gray-400">Hostel Owner, Karachi</div>
                      </div>
                    </div>
                    <div className="font-semibold flex items-center text-xs gap-2">
                      <div className="flex items-center gap-px">
                        <StarIcon className="w-2.5 h-2.5 fill-primary" />
                        <StarIcon className="w-2.5 h-2.5 fill-primary" />
                        <StarIcon className="w-2.5 h-2.5 fill-primary" />
                        <StarIcon className="w-2.5 h-2.5 fill-primary" />
                        <StarIcon className="w-2.5 h-2.5" />
                      </div>
                    </div>
                    <div>
                      "The Hostel Booking App has been a game-changer for my business. It's so easy to manage my
                      listings, automate pricing, and respond to guest reviews."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Hostel Booking App. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
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
