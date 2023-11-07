'use client'
import { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter, useParams } from 'next/navigation'
import { selectedCalendar } from './selectCalendar'

function ActivityForm() {
  const [activity, setActivity] = useState({
    name: '',
    subject: '',
    date_limit: '',
    moodle: '',
    drive: ''
  })

  const form = useRef(null)
  const router = useRouter()
  const params = useParams()

  const handleChange = (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value
    })
  }

  const handleSumbit = async (e) => {
    e.preventDefault()

    if (!params.id) {
      await axios.post('/api/events', activity)
    } else {
      await axios.put('/api/events/' + params.id, activity)
    }

    form.current.reset()
    router.refresh()
    router.push('/events')
  }

  useEffect(() => {
    if (params.id) {
      axios.get('/api/events/' + params.id)
        .then(res => {
          const modifiedDateLimit = res.data.date_limit.split('T')[0]
          setActivity({
            name: res.data.name,
            subject: res.data.subject,
            date_limit: modifiedDateLimit,
            moodle: res.data.moodle,
            drive: res.data.drive
          })
        })
    }
  }, [])

  return (
    <section className='flex justify-center bg-white text-black h-screen pt-10 w-screen'>

      <form
        onSubmit={handleSumbit} ref={form}
      >
        <label
          htmlFor='name'
          className='block text-gray-700 font-bold mb-2 text-2xl'
        >
          Nombre de la actividad
          <span className='text-red-600'>*</span>
        </label>
        <input
          name='name'
          type='text'
          placeholder='Actividad'
          onChange={handleChange}
          value={activity.name}
          className='shadow appearance-none border rounded p-2 px-3 w-full'
          autoFocus
        />

        <label
          htmlFor='subject'
          className='block text-gray-700 text-2xl font-bold mb-2 mt-5'
        >
          Asignatura
          <span className='text-red-600'>*</span>
        </label>
        <select
          className='shadow appearance-none border rounded p-2 w-full'
          name='subject'
          placeholder='Asignatura'
          onChange={handleChange}
          value={activity.subject}
        >
          <option value='Administración de sistemas gestores de bases de datos'>Administración de sistemas gestores de bases de datos</option>
          <option value='Administración de sistemas operativos'>Administración de sistemas operativos</option>
          <option value='Implantación de aplicaciones web'>Implantación de aplicaciones web</option>
          <option value='Seguridad y alta disponibilidad'>Seguridad y alta disponibilidad</option>
          <option value='Servicios de red e internet'>Servicios de red e internet</option>
          <option value='Empresa e iniciativa emprendedora'>Empresa e iniciativa emprendedora</option>
        </select>

        <label
          htmlFor='date_limit'
          className='block text-gray-700 text-2xl font-bold mb-2 mt-5'
        >
          Fecha
          <span className='text-red-600'>*</span>
        </label>
        <selectedCalendar />

        <label
          htmlFor='moodle'
          className='block text-gray-700 text-2xl font-bold mb-2 mt-5'
        >
          Moodle
        </label>
        <textarea
          name='moodle'
          type='text'
          placeholder='Moodle'
          onChange={handleChange}
          value={activity.moodle}
          className='shadow appearance-none border rounded p-2 resize-none w-full'
        />

        <label
          htmlFor='drive'
          className='block text-gray-700 text-2xl font-bold mb-2 mt-5'
        >
          Drive
        </label>
        <textarea
          name='drive'
          type='text'
          placeholder='Drive'
          onChange={handleChange}
          value={activity.drive}
          className='shadow appearance-none border rounded p-2 resize-none w-full'
        />

        <button className='bg-blue-300 rounded-md hover:bg-blue-400 p-2 mt-4 font-bold w-full '>
          {params.id ? 'Actualizar actividad' : 'Crear Actividad'}
        </button>

      </form>
    </section>
  )
}

export default ActivityForm
