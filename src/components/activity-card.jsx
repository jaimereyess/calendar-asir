import Link from 'next/link'
import { format } from 'date-fns'

function ActivityCard ({ activity }) {
  const today = new Date()
  const activitiesDate = new Date(activity.date_limit)
  const isOnTime = today < activitiesDate
  const onTime = isOnTime ? '' : 'ATRASADA'
  const formattedDate = format(activitiesDate, 'yyyy-MM-dd')

  return (
    <Link
      href={`/events/${activity.id}`}
      className={`rounded-xl-lg border-gray-800 mb-3 text-black p-4
                text-center hover:bg-gray-100 hover:cursor-pointer
                ${isOnTime ? 'bg-white' : 'bg-red-300 hover:bg-red-400'}`}
    >
      <h1 className='text-lg font-bold'>{activity.name}</h1>
      <h2 className='text-2xl text-slate-600'>{activity.subject}</h2>
      <p>{formattedDate}</p>
      <p>{activity.moodle}</p>
      <p>{activity.drive}</p>
      <span className='flex items-center justify-center font-bold'>{onTime}</span>

    </Link>
  )
}

export default ActivityCard
