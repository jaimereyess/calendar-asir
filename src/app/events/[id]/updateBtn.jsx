import React from 'react'

const [submit, setSubmit] = useState({
    submitted: '',
})

const handleSubmitted = async () => {
    await axios.put('/api/events/' + params.id, submitted)
}

function updateBtn() {

    return (
        <button
            className='bg-blue-500 hover:bg-blue-700 py-2 px-3 rounded text-white w-full'
            onClick={handleSubmitted}
        >
            Entregar
        </button>
    )
}

export default updateBtn
