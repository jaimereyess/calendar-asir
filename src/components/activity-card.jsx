import Link from 'next/link'

function ActivityCard({ activity }) {
    return (
        <Link
            href={`/events/${activity.id}`}
            className='bg-white rounded-lg border-gray-800 mb-3 text-black p-4
            text-center hover:bg-gray-100 hover:cursor-pointer'>
            <h1 className='text-lg font-bold'>{activity.name}</h1>
            <h2 className='text-2xl text-slate-600'>{activity.subject}</h2>
            <p>{activity.date_limit.split("T")[0]}</p>
            <p>{activity.moodle}</p>
            <p>{activity.drive}</p>

        </Link>
    )
}

export default ActivityCard
