/**
 * v0 by Vercel.
 * @see https://v0.dev/t/J2njXmm0NEW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {Link} from "react-router-dom"

export default function Hostelnav() {
  return (
    <nav className="flex items-center h-14 px-4 border-b w-full max-w-6xl mx-auto dark:border-gray-800 bg-white rounded-full mt-4">
      <Link className="inline-flex items-center font-semibold text-gray-900 dark:text-gray-100" href="#">
        Rehaish
      </Link>
      <nav className="flex items-center gap-4 ml-auto">
        <Link className="font-semibold" to="/hostel">
          Home
        </Link>
        <Link className="font-semibold" to="/list">
          Listing
        </Link>
        <Link className="font-semibold" to="/ofeedback">
          Feedback
        </Link>
        <Link className="font-semibold" to="/login">
          Logout
        </Link>
      </nav>
    </nav>
  )
}