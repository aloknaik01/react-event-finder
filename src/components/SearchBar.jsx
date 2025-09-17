import { useState } from 'react'
import { X } from 'lucide-react'

export default function SearchBar({ onSearch }){
  const [q, setQ] = useState('')
  function submit(e){ e.preventDefault(); onSearch?.(q) }

  return (
    <form onSubmit={submit} className="w-full">
      <div className="relative">
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search events, artists, venues"
          className="w-full rounded-full border border-gray-200 dark:border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        {q && (
          <button type="button" onClick={() => setQ('')} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </form>
  )
}
