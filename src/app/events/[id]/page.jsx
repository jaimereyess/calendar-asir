import axios from 'axios'
import Buttons from './buttons'

async function loadActivities(activityId) {
  const { data } = await axios.get('http://localhost:3000/api/events/' + activityId)
  return data
}

async function ActivityPage({ params }) {
  const activity = await loadActivities(params.id)

  return (
    <section className='flex justify-center bg-white text-black h-screen'>
      <div className='pt-10 px-10'>
        <h1 className='text-6xl underline font-bold'>{activity.name}</h1>
        <div className='text-2xl pt-4 font-semibold'>
          <p>Asignatura: {activity.subject}</p>
          <p>Fecha: {activity.date_limit.split('T')[0]}</p>
          <p>Moodle: <a className='text-blue-400 underline' href={activity.moodle} target='_blank' rel='noreferrer'>Moodle</a></p>
          <p>Drive: <a className='text-blue-400 underline' href={activity.drive} target='_blank' rel='noreferrer'>Drive</a></p>
          <p>Entregado: {activity.submitted}</p>
        </div>
        <Buttons activityId={activity.id} submitted={activity.submitted} />
      </div>
    </section>
  )
}

export default ActivityPage
