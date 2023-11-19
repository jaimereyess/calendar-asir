'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import UpdateBtn from './updateBtn'

function Buttons({ activityId, submitted }) {
  const router = useRouter()
  console.log(submitted)

  return (
    <section>
      <div className='flex gap-x-2 justify-around mt-2'>
        <button
          className='bg-red-500 hover:bg-red-700 py-2 px-3 rounded text-white w-full'
          onClick={async () => {
            if (confirm('¿Estás seguro de eliminar esta actividad?')) {
              const res = await axios.delete('/api/events/' + activityId)
              if (res.status === 204) {
                router.push('/events')
                router.refresh()
              }
            }
          }}
        >
          Eliminar
        </button>
        <button
          className='bg-green-500 hover:bg-green-700 py-2 px-3 rounded text-white w-full'
          onClick={() => {
            router.push(`/events/edit/${activityId}`)
          }}
        >
          Editar
        </button>
      </div>
      {submitted === "Si" ? "" : <UpdateBtn params={{ id: activityId }} />}
    </section>

  )
}

export default Buttons
