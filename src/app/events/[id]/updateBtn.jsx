import React, { useState } from 'react';
import axios from 'axios';

function UpdateBtn({ params }) {
    const [submit, setSubmit] = useState({
        submitted: '',
    });

    const handleSubmitted = async () => {
        setSubmit({ submitted: 'Si' });

        await axios.put('http://localhost:3000/api/events/' + params.id, submit);
    };

    return (
        <button
            className='bg-blue-500 hover:bg-blue-700 py-2 px-3 rounded text-white w-full mt-2'
            onClick={handleSubmitted} >
            Entregar
        </button>
    );
}

export default UpdateBtn;
