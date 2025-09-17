import { useEffect, useState } from 'react'

export default function useFetchEvents({ query, page = 1, perPage = 12 } = {}) {
  const [state, setState] = useState({ events: [], loading: false, error: null, hasMore: false })

  useEffect(() => {
    let cancelled = false
    async function fetchData() {
      setState(s => ({ ...s, loading: true, error: null }))
      try {
      
        const url = `${import.meta.env.VITE_API_URL || '/mock-events.json'}`
        const res = await fetch(url)
        const json = await res.json()
        if (cancelled) return
      
        const filtered = (json.events || []).filter(e => !query || e.name.toLowerCase().includes(query.toLowerCase()))
        const start = (page - 1) * perPage
        const pageItems = filtered.slice(start, start + perPage)
        setState({ events: pageItems, loading: false, error: null, hasMore: start + perPage < filtered.length })
      } catch (err) {
        if (cancelled) return
        setState(s => ({ ...s, loading: false, error: err.message || 'Error fetching' }))
      }
    }
    fetchData()
    return () => { cancelled = true }
  }, [query, page, perPage])

  return state
}
