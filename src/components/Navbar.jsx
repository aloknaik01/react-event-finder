import { Link, useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'
import ThemeToggle from './ThemeToggle'
import { Heart } from 'lucide-react'

export default function Navbar(){
  const navigate = useNavigate()
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 flex items-center gap-4">
        <Link to="/" className="text-xl font-semibold">EventFinder</Link>

        <div className="flex-1">
          <SearchBar onSearch={(q)=> navigate(`/?q=${encodeURIComponent(q)}`)} />
        </div>

        <div className="flex items-center gap-3">
          <Link to="/favorites" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <Heart className="w-5 h-5" />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
