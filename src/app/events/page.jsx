import axios from 'axios'
import ActivityCard from '@/components/activity-card'
import Link from 'next/link'

export async function loadActivities() {
    const { data } = await axios.get('http://localhost:3000/api/events')
    return data
}


async function Activitiespage() {
    const activities = await loadActivities()

    const today = new Date();
    const sortedActivities = activities.sort((a, b) => new Date(a.date_limit) - new Date(b.date_limit));


    return (
        <main>
            <div className='grid gap-4 grid-cols-4'>
                {sortedActivities.map(activity => (
                    <ActivityCard activity={activity} key={activity.id} onTime={today < activity.date_limit} />
                ))}

                <section className='flex items-center justify-center'>
                    <Link href="/new" className='bg-blue-500 px-3 py-2 w-30 hover:bg-blue-600 rounded'>
                        Crear nuevo evento
                    </Link>
                </section>
            </div>
        </main>
    )
}

export default Activitiespage
