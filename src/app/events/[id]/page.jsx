"use client"
import axios from 'axios'
import Buttons from './buttons'

async function loadActivities(activityId) {
    const { data } = await axios.get('http://localhost:3000/api/events/' + activityId)
    return data
}

async function ActivityPage({ params }) {

    const activity = await loadActivities(params.id)

    return (
        <section className='flex items-center justify-center'>
            <div className='bg-white p-6 text-black'>
                <p>Actividad: {activity.name}</p>
                <p>Asignatura: {activity.subject}</p>
                <p>Fecha: {activity.date_limit}</p>
                <p>Moodle: <a className='text-blue-400 underline' href={activity.moodle} target='_blank'>Moodle</a></p>
                <p>Drive: <a className='text-blue-400 underline' href={activity.drive} target='_blank'>Drive</a></p>
                <Buttons activityId={activity.id} />
            </div>
        </section >

    )
}

export default ActivityPage
