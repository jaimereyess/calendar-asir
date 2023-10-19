"use client"
import { useState, useEffect } from 'react'

function Profile() {
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

    return (
        <div>
            {data.map(activity => (
                <h1>{activity.date_limit}</h1>
            ))}
        </div>
    )
}

export default Profile
