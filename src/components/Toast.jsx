export default function Toast({ message }) {
  if (!message) return null
  return (
    <div className="fixed right-6 bottom-6 z-50 pointer-events-none">
      <div className="pointer-events-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 shadow">
        {message}
      </div>
    </div>
  )
}
