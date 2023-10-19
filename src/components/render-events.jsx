'use client'
import { useState, useEffect } from 'react'

function RenderEvents () {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/events')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return data.map(activity => activity.date_limit.toString().split('T')[0])
}

export default RenderEvents
