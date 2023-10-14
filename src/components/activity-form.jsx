"use client"
import { useRef, useState, useEffect } from 'react'
import axios from 'axios';
import { useRouter, useParams } from 'next/navigation'

function ActivityForm() {
    const [activity, setActivity] = useState({
        name: "",
        subject: "",
        date_limit: "",
        moodle: "",
        drive: ""
    })

    const form = useRef(null);
    const router = useRouter()
    const params = useParams();

    const handleChange = (e) => {
        setActivity({
            ...activity,
            [e.target.name]: e.target.value,
        });
    };

    const handleSumbit = async (e) => {
        e.preventDefault();

        if (!params.id) {
            await axios.post('/api/events', activity);
        } else {
            await axios.put("/api/events/" + params.id, activity);
        }

        form.current.reset()
        router.refresh()
        router.push("/events")
    }

    useEffect(() => {
        if (params.id) {
            axios.get('/api/events/' + params.id)
                .then(res => {
                    setActivity({
                        name: res.data.name,
                        subject: res.data.subject,
                        date_limit: res.data.date_limit,
                        moodle: res.data.moodle,
                        drive: res.data.drive
                    })
                })
        }
    }, [])

    return (
        < form className='bg-white text-black shadow-md rounded-md px-8 pt-6 pb-8 mb-4'
            onSubmit={handleSumbit} ref={form}
        >
            <label htmlFor="name"
                className='block text-gray-700 text-sm font-bold mb-2'>
                Nombre de la actividad</label>
            <input
                name="name"
                type="text"
                placeholder="Actividad"
                onChange={handleChange}
                value={activity.name}
                className='shadow appearance-none border rounded w-full p-2 px-3'
                autoFocus />


            <label htmlFor="subject"
                className='block text-gray-700 text-sm font-bold mb-2'>
                Asignatura</label>

            <select
                name="subject"
                type="submit"
                placeholder="Asignatura"
                onChange={handleChange}
                value={activity.subject}>
                <option value="Administración de sistemas gestores de bases de datos">Administración de sistemas gestores de bases de datos</option>
                <option value="Administración de sistemas operativos">Administración de sistemas operativos</option>
                <option value="Implantación de aplicaciones web">Implantación de aplicaciones web</option>
                <option value="Seguridad y alta disponibilidad">Seguridad y alta disponibilidad</option>
                <option value="Servicios de red e internet">Servicios de red e internet</option>
                <option value="Empresa e iniciativa emprendedora">Empresa e iniciativa emprendedora</option>
            </select>


            <label htmlFor="date_limit"
                className='block text-gray-700 text-sm font-bold mb-2'>
                Fecha</label>
            <input
                name="date_limit"
                type="text"
                placeholder="YYYY-MM-DD"
                onChange={handleChange}
                value={activity.date_limit}
                className='shadow appearance-none border rounded w-full p-2 px-3'
            />

            <label htmlFor="moodle"
                className='block text-gray-700 text-sm font-bold mb-2'>
                Moodle</label>
            <textarea
                name="moodle"
                type="text"
                placeholder="Moodle"
                onChange={handleChange}
                value={activity.moodle}
                className='shadow appearance-none border rounded w-full p-2 px-3 resize-none'
            />

            <label htmlFor="drive"
                className='block text-gray-700 text-sm font-bold mb-2'>
                Drive</label>
            <textarea
                name="drive"
                type="text"
                placeholder="Drive"
                onChange={handleChange}
                value={activity.drive}
                className='shadow appearance-none border rounded w-full p-2 px-3 resize-none'
            />

            <button className='bg-blue-300 rounded-md hover:bg-blue-400 p-2 mt-4 font-bold '>
                {params.id ? "Update Activity" : "Create Activity"}
            </button>

        </form >
    )
}

export default ActivityForm
